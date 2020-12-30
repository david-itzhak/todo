import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drinck Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)]
      return {
        todoData: newArray
      }
    });
  };

  addItem = (text) => {
    console.log('Added ' + text);
  }

  render() {
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={todoData}
          onDeleted={ this.deleteItem }
        />
        <ItemAddForm
          addItem= { this.addItem }
        />
      </div>
    );
  }
}
import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false
  }

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`)
    this.setState((state) =>{
      done: !this.state.done
    })
  }

  render() {
    const {label, important = false} = this.props;
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    const {done} = this.state;
    let classNameTodo = done ? "todo-list-item done" : "todo-list-item";

    return (
      <span className={classNameTodo}>

      <span
        className="todo-list-item-label"
        style={style}
        onClick={this.onLabelClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>

    </span>
    );
  }
}
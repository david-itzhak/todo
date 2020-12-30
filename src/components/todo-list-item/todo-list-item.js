import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    // console.log(`Done: ${this.props.label}`)
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  }

  onImportantButtonClick = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  }

  render() {
    const {label, onDeleted} = this.props;
    const {done, important} = this.state;

    let classNameTodo = 'todo-list-item';
    if (done) {
      classNameTodo += ' done';
    }
    if (important) {
      classNameTodo += ' important';
    }

    return (
      <span className={classNameTodo}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onImportantButtonClick}>
          <i className="fa fa-exclamation"/>
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o"/>
        </button>
     </span>
    );
  }
}
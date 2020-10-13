import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import styles from './styles.module.sass';

function TodoForm(props) {

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { todos, addTodo } = props

      const length = todos.length;
      const id = length > 0 ? (todos[length - 1].id + 1) : 1;
      addTodo({ id, text: e.target.value, complete: false });
    }
  }

  return (
    <form>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        onKeyDown={_handleKeyDown}
      />
    </form>
  );
}

export default connect(
  state => state.todosReducer,
  dispatch => bindActionCreators(actionCreators, dispatch))(TodoForm);

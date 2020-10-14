import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../actions';
import styles from './styles.module.sass';
import PropTypes from 'prop-types';

function TodoForm({todos, addTodo}) {
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 5) {
        const length = todos.length;
        const id = length > 0 ? (todos[length - 1].id + 1) : 1;
        addTodo({id, text: e.target.value, complete: false});
      } else {
        alert('Todo title minimum length 6 characters');
      }
    }
  };

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

TodoForm.propTypes = {
  _handleKeyDown: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,

};

export default connect(
    (state) => state.todosReducer,
    (dispatch) => bindActionCreators(actionCreators, dispatch))(TodoForm);

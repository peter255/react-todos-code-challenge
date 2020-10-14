import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {actionCreators} from '../../actions';
import styles from './styles.module.sass';
import inputStyle from '../TodoForm/styles.module.sass';

function TodoItem({text, complete, todoIndex,
  deleteTodo, editTextTodo, setCompletedTodo}) {
  const [showEdit, setShowEdit] = useState(false);

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 5) {
        editTextTodo(todoIndex, e.target.value);
        e.target.value = '';
        setShowEdit(false);
      } else {
        alert('Todo title minimum length 6 characters');
      }
    }
  };


  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{text}</h2>

      {
        showEdit ? <input
          type="text"
          placeholder="What do you have to do?"
          className={inputStyle.input}
          onKeyDown={_handleKeyDown}
        /> : null
      }

      {
        !complete ?
          <button onClick={() => setCompletedTodo(todoIndex)}
            className={styles.completeBtn}>Complete</button> :
          <span className={styles.completed}>Completed</span>
      }

      <button onClick={() => deleteTodo(todoIndex)}
        className={styles.deleteBtn}>Delete</button>
      <button onClick={() => setShowEdit(!showEdit)}
        className={styles.editBtn}>{showEdit ? 'Cancel Edit' : 'Edit'}</button>
    </div>
  );
}

TodoItem.propTypes = {
  setCompletedTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTextTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  todoIndex: PropTypes.number.isRequired,
};

export default connect(
    null,
    (dispatch) => bindActionCreators(actionCreators, dispatch)
)(TodoItem);

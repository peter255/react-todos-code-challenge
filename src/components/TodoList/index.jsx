import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import TodoItem from '../TodoItem';
import styles from './styles.module.sass';

function TodoList(props) {
  const { isPending, todos, error, toggleTodos } = props;

  useEffect(() => {
    toggleTodos();// get todos
  }, [toggleTodos]);// We only run this effect again if recentSheets changes

  return (
    <div className={styles.container}>
      {
        isPending ? <h1>isLoading...</h1> :
          error ? <h1>Errorrrrrrrr!</h1> :
            todos.map((item, index) => <TodoItem key={item.id} text={item.text} complete={item.complete} todoIndex={index} />)
      }
    </div>
  );
}

export default connect(
  state => state.todosReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(TodoList);


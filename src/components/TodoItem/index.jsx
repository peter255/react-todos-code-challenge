import React from 'react';

import styles from './styles.module.sass';

function TodoItem() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Title</h2>
      <button className={styles.completeBtn}>Complete</button>
      <button className={styles.deleteBtn}>Delete</button>
    </div>
  );
}

export default TodoItem;

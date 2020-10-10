import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.sass';

function Header({title}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {title}
      </h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'React Todos',
};

export default Header;

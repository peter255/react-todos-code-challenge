import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.sass';

function ContentContainer({children}) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContainer;

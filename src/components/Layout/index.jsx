import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './../Sidebar/index';
import Header from '../Header';
import styles from './style.module.scss';
import useToggleClass from '../../hooks/useToggleClass';

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

function Layout(props) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const { classToggle } = useToggleClass(styles.main, isOpenSidebar, [
    styles.active
  ]);

  return (
    <div className="box-border font-body">
      <Sidebar isOpenSidebar={isOpenSidebar} />

      <div className={classToggle}>
        <Header
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />

        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;

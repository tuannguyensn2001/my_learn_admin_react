import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineUser } from 'react-icons/all';
import SidebarItem from '../SidebarItem';
import useToggleClass from './../../hooks/useToggleClass';
// import { Link } from 'react-router-dom';
import styles from './style.module.scss';

Sidebar.propTypes = {
  isOpenSidebar: PropTypes.bool
};

export default function Sidebar({ isOpenSidebar }) {
  const { classToggle } = useToggleClass(styles.sidebar, isOpenSidebar, [
    styles.active
  ]);

  return (
    <div className={classToggle}>
      <ul>
        <li>
          <span className="nav_item">
            <span>
              <div>
                <AiOutlineUser />
              </div>
            </span>
            <span>
              <h2>Brand name</h2>
            </span>
          </span>
        </li>

        <SidebarItem />
      </ul>
    </div>
  );
}

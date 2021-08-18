import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import useToggleClass from './../../hooks/useToggleClass';
import { GiHamburgerMenu } from 'react-icons/all';

Header.propTypes = {
  isOpenSidebar: PropTypes.bool,
  setIsOpenSidebar: PropTypes.func
};

function Header({ isOpenSidebar, setIsOpenSidebar }) {
  const toggleClick = () => setIsOpenSidebar((prevState) => !prevState);

  const { classToggle } = useToggleClass(styles.toggle, isOpenSidebar, [
    styles.active
  ]);

  return (
    <div className={styles.topbar}>
      <div onClick={toggleClick} className={classToggle}>
        <GiHamburgerMenu />
      </div>

      <div className={styles.search}>
        <label htmlFor="">
          <input type="text" placeholder="search here" />
        </label>
      </div>

      <div className={styles.user}>
        <img
          src="https://r2h8t4h7.stackpathcdn.com/wp-content/uploads/2020/06/Martin-Garrix-press-photo-2019-cr-Louis-van-Baar-billboard-1548.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;

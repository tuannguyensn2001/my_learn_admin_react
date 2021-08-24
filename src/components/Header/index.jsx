import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import useToggleClass from './../../hooks/useToggleClass';
import { GiHamburgerMenu } from 'react-icons/all';
import { LinearProgress } from '@material-ui/core';
import AppContext from 'src/context';

Header.propTypes = {
  isOpenSidebar: PropTypes.bool,
  setIsOpenSidebar: PropTypes.func
};

function Header({ isOpenSidebar, setIsOpenSidebar }) {
  const toggleClick = () => setIsOpenSidebar((prevState) => !prevState);

  const { classToggle } = useToggleClass(styles.toggle, isOpenSidebar, [
    styles.active
  ]);

  const { appState } = useContext(AppContext);

  return (
    <div>
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

      <LinearProgress
        className={`mt-0.5  ${!appState?.isLoading ? 'invisible ' : 'visible'}`}
        color={'success'}
      />
    </div>
  );
}

export default Header;

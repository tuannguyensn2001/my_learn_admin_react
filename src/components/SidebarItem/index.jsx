import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineRight, AiOutlineDown } from 'react-icons/all';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

function SidebarItem() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleClick = () => setIsOpenDropdown((prevState) => !prevState);

  return (
    <li className={styles.sidebar_item}>
      <div onClick={handleClick}>
        <span className="nav_item">
          <span>
            <div>
              <AiOutlineUser />
            </div>
          </span>
          <span>Quản lý khóa học</span>
        </span>
        <span className="flex w-full justify-end">
          <span className="flex flex-col justify-center">
            {!isOpenDropdown && <AiOutlineRight />}
            {isOpenDropdown && <AiOutlineDown />}
          </span>
        </span>
      </div>

      <div className={isOpenDropdown ? styles.appear : styles.disappear}>
        <div>
          {/* <div> */}
          <Link to="/courses">Danh sách khóa học</Link>
          {/* </div> */}
          {/* <div> */}
          <Link to="/courses/create">Thêm mới khóa học</Link>
          {/* </div> */}
        </div>
      </div>
    </li>
  );
}

export default SidebarItem;

import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

ModalChapter.propTypes = {
  isOpen: PropTypes.bool
};

function ModalChapter({ isOpen }) {
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal title="Basic Modal" visible={isOpen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ModalChapter;

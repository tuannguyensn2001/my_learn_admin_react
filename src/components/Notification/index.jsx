import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/core/Alert';
import AppContext from 'src/context';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification() {
  const { appState, dispatch } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      payload: {
        type: 'success',
        message: 'Thành công r',
        isOpen: true
      }
    });
  }, []);

  useLayoutEffect(() => {
    if (!appState?.notification?.isOpen) return;
    setIsOpen(true);
  }, [appState.notification.isOpen]);

  const handleClose = () => {
    // dispatch({
    //   type: 'HIDE_NOTIFICATION',
    //   payload: {
    //     type: '',
    //     message: '',
    //     isOpen: false
    //   }
    // });
    setIsOpen(false);
    // dispatch({
    //   type: 'HIDE_NOTIFICATION'
    // });
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      onClose={handleClose}
      open={isOpen}
      autoHideDuration={2000}
    >
      <Alert
        onClose={handleClose}
        severity={appState?.notification?.type || 'success'}
        sx={{ width: '100%' }}
      >
        {appState?.notification?.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;

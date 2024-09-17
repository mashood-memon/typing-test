import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from '@mui/material/Modal';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useTheme } from '../context/themeContext';
import CustomGoogleButton from './GoogleButton';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [user, loading, error] = useAuthState(auth);
  const { theme } = useTheme();

  const [value, setValue] = useState(0);

  const handleValueChange = (e, v) => {
    setValue(v);
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success('Google Login Successful');
        handleClose()
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const logout = () => {
    auth.signOut()
      .then((res) => {
        toast.success('Logged Out.');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navigate = useNavigate()

  const handleOpen = () =>{
    if(user){
      navigate('/user')
    }
    else{
    setOpen(true);
    }
  }

  return (
    <div>
      <AccountCircleIcon onClick={handleOpen} style={{cursor: 'pointer', marginRight:'10px'}}/>
      {!loading && user && <LogoutIcon onClick={logout} style={{cursor: 'pointer'}} />}
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '400px', textAlign: 'center' }}>
          <AppBar position='static' style={{ background: 'transparent' }}>
            <Tabs variant='fullWidth' value={value} onChange={handleValueChange}>
              <Tab label='login' style={{ color: theme.textColor }}></Tab>
              <Tab label='signup' style={{ color: theme.textColor }}></Tab>
            </Tabs>
          </AppBar>

          {value === 0 ? <LoginForm handleClose={handleClose} /> : <SignupForm handleClose={handleClose}/>}
          <Box>
            <span>OR</span>
            <CustomGoogleButton onClick={handleGoogleSignin} />
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default User;
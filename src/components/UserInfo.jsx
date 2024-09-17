import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const UserInfo = ({totalTestsTaken}) => {
    const [user] = useAuthState(auth)
  return (
    <div className='user-profile'>
        <div className="user">
            <div className="pic">
            <AccountCircleIcon style={{display: 'block', transform: 'scale(6)', margin: 'auto', marginRight:'4rem' ,marginTop: '3.5rem'}}/>
            </div>
            <div className='info'>
                <div className='email'>{user.email}</div>
                <div className='joined-at'>{user.metadata.creationTime}</div>
            </div>
        </div>

        <div className="total-tests">
        tests taken: {totalTestsTaken}

        </div>
      
    </div>
  )
}

export default UserInfo

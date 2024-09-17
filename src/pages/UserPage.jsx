import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import TableUserData from '../components/TableUserData';
import Graph from '../components/Graph';
import UserInfo from '../components/UserInfo';

const UserPage = () => {
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([])
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  let tempData = []
  let tempGraphData =[]

  const fetchUserData = async () => {
   const resultsRef = db.collection('results')
   const {uid} = auth.currentUser

   let tempData =[]

   resultsRef.where('userID', '==', uid).orderBy('timeStamp', 'desc').get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        tempData.push({...doc.data()})
        tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0], doc.data().wpm])
    })
    setData(tempData)
    setGraphData(tempGraphData.reverse())
   })
  }; 

  useEffect(() => {
    if(!loading){
      fetchUserData();
    }
    if(!loading && !user){
      navigate('/')
    }
  }, [loading]);

  if(loading){
    return <div className='center-of-screen'>
    <CircularProgress size={100} color= 'inherit' />
</div>
    
  }

  return (
    <div className='canvas'>
        <UserInfo totalTestsTaken={data.length}/>
        <div className="graph-user-page">
        <Graph graphData={graphData} type='date'></Graph>
        </div>
        <TableUserData data={data} isLoading={loading} />
    </div>
  );
};

export default UserPage;
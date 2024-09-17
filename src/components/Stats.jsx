import React, { useEffect } from 'react'
import Graph from './Graph'
import { auth, db } from '../firebaseConfig'
import { toast } from 'react-toastify'

const Stats = ({wpm, accuracy, extraChars, correctChars, inCorrectChars, missedChars, graphData, testTime}) => {

    let timeSet = new Set()
  const newGraph = graphData.filter((i)=>{
    if(!timeSet.has(i[0])){
      timeSet.add(i[0])
      return i
    }
  })

  const pushDataToDB = ()=>{
    const resultsRef = db.collection('results')
    const {uid} = auth.currentUser

    resultsRef.add({
      wpm: wpm,
      testTime: testTime,
      accuracy: accuracy,
      timeStamp: new Date(),
      userID : uid,
      correctChars: correctChars,
      inCorrectChars: inCorrectChars,
      missedChars: missedChars,
      extraChars: extraChars
    })
    .then((res)=>{
      toast.success('Data Pushed to DB')
    })
    .catch((err)=>{
      toast.error("Not able to save results")
    })
  }


  useEffect(()=>{
    if(auth.currentUser){
      pushDataToDB()
    }
    else{
      toast.warning("Login to save results")
    }
  },[])


  return (
    <div className='stats-box'>
        <div className='left-stats'>
        <div className='title'>Test Time</div>
        <div className='sub-title'>{testTime} secs</div>
            <div className='title'>WPM</div>
            <div className='sub-title'>{wpm}</div>
            <div className='title'>Accuracy</div>
            <div className='sub-title'>{accuracy}%</div>
            <div className='title'>Correct Characters</div>
            <div className='sub-title'>{correctChars}</div>
            <div className='title'>Incorrect Characters</div>
            <div className='sub-title'>{inCorrectChars} </div>
            <div className='title'>Missed Characters</div>
            <div className='sub-title'>{missedChars}</div>
            <div className='title'>Extra Characters</div>
            <div className='sub-title'>{extraChars}</div>
        </div>
        <div className='right-stats'>
            <Graph graphData={newGraph}/>
        </div>
      
    </div>
  )
}

export default Stats

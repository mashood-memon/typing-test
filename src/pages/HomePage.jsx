import React from 'react'
import TypingBox from '../components/typingBox';
import Footer from "../components/Footer";
import Header from "../components/Header";


const HomePage = () => {
  return (
    <>
      <div className="canvas">  
        <Header />
        <TypingBox />
        <Footer />
      </div>
    </>
  )
}

export default HomePage

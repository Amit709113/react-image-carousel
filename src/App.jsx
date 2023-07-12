import React from 'react'
import './App.css';
import Carousel from './components/Carousel';
 import slide from './data/carouselData.json';
 import imgpreity from './Images/preity.jpg'
 import imgseema from './Images/seema.jpg'


function App() {
  // console.log(feedbacks.feedback)
  return (
    <>
    <img src={imgseema} alt="hn"/>
    <img src={imgpreity} alt="hello" />
    {/* <Carousel data={slide.slides} />     */}
    </>
  )
}

export default App

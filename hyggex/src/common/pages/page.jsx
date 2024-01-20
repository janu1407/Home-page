import React from 'react'
import home from "../../components/images/home.png"
import './page.css'
import bulb from "../../components/images/bulb.png"
import volume from "../../components/images/volume.png"
import vector from "../../components/images/vector.svg"
import left from "../../components/images/left.svg"
import right from "../../components/images/right.svg"
import screen from "../../components/images/screen.svg"

const Page = () => {
  return (
    <div>
      <div class="page">
        <div><img src={home} alt='' class="home"/></div>
        <div><span class="separator"> &gt; </span>
        <span>Flashcard</span>
        <span class="separator"> &gt; </span>
        <span>Mathematics</span>
        <span class="separator"> &gt; </span>
        <b><span className='rf'>Relation and Function</span></b></div>
     </div>
     <b><p className='hell'>Relations and Functions ( Mathematics )</p></b>
     <ul className='line'>
                <b><li className='study'>Study</li></b>
                <li>Quiz</li>
                <li>Test</li>
                <li>Game</li>
                <li>Others</li>
     </ul>
     <div className='main'>
     <label class="main" for="main"></label>
        <input type="checkbox" id="main" hidden />
      <div className='card'>
        <div className='front'>
        
          <img src={bulb} alt='' class='bulb'/>
          <img src={volume} alt='' class='volume'/>
          <h1 style={{color:"white",justifyContent:"center", padding:"150px",fontSize:"40px"}}>9 + 6 + 7x - 2x - 3</h1>
        </div>
        <div className='back'>
          <img src={bulb} alt='' class='bulb'/>
          <img src={volume} alt='' class='volume'/>
          <h1 style={{color:"white",justifyContent:"center", padding:"150px",fontSize:"40px"}}>5x + 12</h1>
        </div>
      </div>
      <div className='icon'>
        <img src={vector} alt='' className='vector'></img>
        <img src={left} alt='' className='left'></img>
        <div><h1 style={{fontsize:"24px",color:"#202B37",padding:"20px"}}>01/10</h1></div>
        <img src={right} alt='' className='right'></img>
        <img src={screen} alt='' className='screen'></img>
      </div>
     </div>
    </div>
  )
}

export default Page









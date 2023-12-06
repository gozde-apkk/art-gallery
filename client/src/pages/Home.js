

import React from 'react'


import '../style/style.css'
import Artist from '../layout/Artist';


const Home = () => {

  return (
    <div className='home-page-wrapper'>
       <div className='article' >
        <div className="article-left">
             <div style={{  margin: "35px",border: "2px solid black", height: "383px"}} classname="left-container">
                 <div className='title-container'>
                 <h1 className = "article-title">
                 Creativity is an internal experience...
                 </h1>
                 </div>
                <div>
                <button className='home-btn' style={{color:"ButtonShadow"}}>Learn More</button>
                </div>
             </div>
        </div>
        <div className="article-right">
             <div className="right-container"> 

               </div>

             </div>
        
       </div>
       <Artist/>
   </div>
    );
}

export default Home

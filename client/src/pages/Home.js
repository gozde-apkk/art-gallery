

import React from 'react'


import '../style/style.css'
import Artist from '../layout/Artist';


const Home = () => {

  return (
    <div className='home-page-wrapper'>
       <div className='article' >
        <div className="article-left">
             <div style={{margin : "20px", height: "70%"}} classname="left">
                 <h1 className = "article-title">
                 Creativity is an internal experience...
                 </h1>
                 <button>Learn More</button>
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

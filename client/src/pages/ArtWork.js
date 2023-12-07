



import React from 'react'
import '../style/style.css'

const ArtWork = () => {
  return (
    <div className="bg-black">
       <div className="art-title">
       <h1 className="text-white">Discover physical, digital and NFT artworks</h1>
       </div>
       <div className='img-container'>
         <div className='container'>
         <div className="art-img">
          <h2>Canvas</h2>
        <img src="/icon/artwork.png"/>
       </div>
       <div className="art-img">
       <h2>NFT</h2>
       <img src="/icon/artwork.png"/>
       </div>
       <div className="art-img">
       <h2>Digital</h2>
       <img src="/icon/artwork.png"/>
       </div>
         </div>
       </div>
       
    </div>
  )
}

export default ArtWork
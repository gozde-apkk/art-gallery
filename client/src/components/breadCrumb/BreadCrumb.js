

import React from 'react'
import { Link } from 'react-router-dom';
const BreadCrumb = (props) => {
    const {title} = props;
  return (
    <div className='py-4 mb-80 text-white'>
       <div className='container-xxl'>
        <div className='row'>
          <div className="col-12 d-flex justify-content-center" >
             <p className="text-center">
                <Link to='/'> Home</Link>
                /{title}
             </p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default BreadCrumb

import React from 'react'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

const Store = () => {
  return (
    <div className='w-full h-[100vh] text-white '>
       <BreadCrumb title="Our Store"/>
       <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
                <div className='bg-white radius-5 px-8'>
                   <h3>Shop By Categories</h3>
                </div>
                <div className='bg-white radius-5 px-8'>
                   <h3>Filter By</h3>
                </div>
            </div>
            <div className='col-9'>

            </div>

        </div>
       </div>
    </div>
  )
}

export default Store

import React from 'react'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import { useSelector } from 'react-redux'
import ProductComponent from '../../components/product/ProductComponent'

const Store = () => {
   const product = useSelector(state => state.allProducts)
  return (
    <div className='w-full h-[100vh] text-white '>
       <BreadCrumb title="Our Store"/>
       <div className='border-2 w-full h-full'>
        <div className=' border-2  w-full flex h-full'>
          <div className='border-2 col-3 w-64'>
          <div className=' h-60 border-2  w-[41rem] text-white'>
                 <h2>Shop By Category</h2>
            </div>
            <div className=''>
               <h2>Filters by</h2>
            </div>
          </div>
          <div className=' flex flex-wrap  border-2'>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/>
            < ProductComponent/> 
           < ProductComponent/>
          </div>

        </div>
       </div>
    </div>
  )
}

export default Store

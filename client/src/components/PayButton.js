

import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const PayButton = ({items}) => {


    const {userInfo} = useSelector((state) => state.auth);
    const handleCheckout = () => {
         console.log(items)
         axios.post("http://localhost:5000/api/stripe/create-checkout-session", {
            items,
            userId : userInfo._id,
         }).then((res) => {
            if(res.data.url){
                window.location.href = res.data.url;    
            }
         })
    }
  return (
          <>
          <button onClick={() =>handleCheckout()}> Payments </button>
          </>
    )
}

export default PayButton
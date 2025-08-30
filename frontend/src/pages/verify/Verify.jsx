import React from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useEffect } from 'react';

function Verify() {

    const [seacrhParams,setSearchParams] = useSearchParams();
    const success = seacrhParams.get("success");
    const orderId = seacrhParams.get("orderId");
    // console.log(success,orderId);
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url+'/api/order/verify', {success,orderId});
        //payment successful
        if(response.data.success){
            navigate("/myorders");
        }
        //payment failed
        else{
            navigate("/");
        }
    }

    useEffect(() => {
        verifyPayment();
    },[]); 

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify

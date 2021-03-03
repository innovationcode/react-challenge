import React, {useState, useEffect } from 'react';
import { db } from './../../firebase.js';

import './Confirmation.css';

const Confirmation = (order_id) => {
    console.log("order id --- ",order_id.match.params.order_id)
    const [order, setOrder] = useState([]);

    useEffect(() =>{
        
    },[])

    console.log("ORDER   --- > ",order)
    return (
        <div className = "confirmation_main">
            <div className = "confirmation_inner">
                <h1 style = {{color:'rgb(2, 109, 109)', fontSize:'40px'}}>thank you</h1>
            </div>
        </div>
    )
}

export default Confirmation;

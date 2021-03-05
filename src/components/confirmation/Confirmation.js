import React, {useState, useEffect } from 'react';
import { db } from './../../firebase.js';
import Order from './order/Order.js';

import './Confirmation.css';

const Confirmation = (order_id) => {
    console.log("order id --- ",order_id.match.params.order_id)
    const [showMainDiv, setShowMainDiv] = useState(true)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(order_id) {
            db
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    }, [order_id])


    console.log("ORDER   --- > ",orders)
    return (
        <>
        {showMainDiv ?(
            <div className = "confirmation_main">
                <div className = "confirmation_inner">
                    <span className = "confirmation_close" onClick = {() => {setShowMainDiv(false)}}>x</span>
                    <h1>thank you !</h1>
                    <div>
                        <h3>Your Orders</h3>

                        <div className='order_display'>
                            {orders?.map(order => (
                                <Order
                                     
                                    order={order} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ):(
           null 
        )
        
        }
        </>
    )
}

export default Confirmation;

import React, {useState, useEffect } from 'react';
import { db } from './../../firebase.js';
import Order from './order/Order.js';
import moment from "moment";
import CurrencyFormat from "react-currency-format";

import './Confirmation.css';

const Confirmation = (order_id) => {
    console.log("order id --- ",order_id.match.params.order_id, typeof(order_id.match.params.order_id))
    const [showMainDiv, setShowMainDiv] = useState(true)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(order_id) {
            db.collection("orders")
              .doc(order_id.match.params.order_id)
              .onSnapshot((doc) => {
                     console.log("Current data: ", doc.data());
                     setOrders(doc.data())
               });
            // db
            // .collection('orders')
            // .orderBy('created', 'desc')
            // .onSnapshot(snapshot => (
            //     setOrders(snapshot.docs.map(doc => ({
            //             id: doc.id,
            //             data: doc.data()
            //     })))
            // ))
        } else {
            setOrders([])
        }
    }, [order_id])

    return (
        <>
        {showMainDiv ?(
            <div className = "confirmation_main">
                <div className = "confirmation_inner">
                    <span className = "confirmation_close" onClick = {() => {setShowMainDiv(false)}}>x</span>
                    <h1>thank you !</h1>
                        <div className='order_display'>
                            <h2>Your order</h2>
                            <p>{moment.unix(orders.created).format("MMMM Do YYYY, h:mma")}</p>
                            <p className="order_id">
                                <small>{order_id.match.params.order_id}</small>
                            </p>
                            {orders.cart?.map(order => (
                                <Order
                                    order={order} 
                                />
                            ))}
                        </div>

                        <CurrencyFormat
                            renderText={(value) => (
                                <h3 style = {{paddingLeft:'30px'}}>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={orders.amount / 100}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}                
                        /> 
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

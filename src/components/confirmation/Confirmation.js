import React, {useState, useEffect} from 'react';
import { db } from './../../firebase.js';
import Order from './order/Order.js';
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

import './Confirmation.css';
import { NavigateBeforeSharp } from '@material-ui/icons';

const Confirmation = (order_id) => {
    // console.log("order id --- ",order_id.match.params.order_id, typeof(order_id.match.params.order_id))
    const [showMainDiv, setShowMainDiv] = useState(true)
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if(order_id) {
            db.collection("orders")
              .doc(order_id.match.params.order_id)
              .onSnapshot((doc) => {
                     console.log("Current data: ", doc.data());
                     setOrders(doc.data())
               })
        } else {
            setOrders([])
        }
    }, [order_id])

    const handleClose = () => {
        setShowMainDiv(false)
        history.push('/')
    }

    return (
        <>
        {showMainDiv ?(
            <div className = "confirmation_main">
                <div className = "confirmation_inner">
                    <span className = "confirmation_close" onClick = {() => {handleClose()}}>x</span>
                    <h1>thank you !</h1>
                        <div className='order_display'>
                            <h2>Your order</h2>
                            <p>{moment.unix(orders.created).format("MMMM Do YYYY, h:mma")}</p>
                            <p className="order_id">
                                <small>{order_id.match.params.order_id}</small>
                            </p>
                            <h3 style= {{paddingTop:'10px'}}>Shipping address :</h3>
                            <p>
                                {orders && orders.deliveryAdress && 
                                    orders.deliveryAdress.map(ad => 
                                        <small>{ad.firstName} {ad.lastName} <br/>
                                                {ad.addressLine1} , {ad.addressLine2} <br/>
                                                {ad.city} - {ad.postalCode} <br/>
                                                {ad.state} - USA
                                        </small> 
                                    )
                                }
                            </p>
                            <h3 style= {{paddingTop:'10px'}}>Order details :</h3>  
                            {orders.cart?.map(order => (
                                <Order key={order.id}
                                    order={order} 
                                />
                            ))}
                        </div>

                        <CurrencyFormat
                            renderText={(value) => (
                                <h3 style = {{padding:'30px'}}>Order Total: {value}</h3>
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

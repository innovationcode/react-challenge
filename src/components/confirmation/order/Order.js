import React from 'react'
import './Order.css'
// import moment from "moment";
// import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
    // console.log("ORDER in order **** :--", order)
    return (
        <div className='order_main'>
            {/* <h2>Your order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p> */}
            <div>
                {/* {order.data.cart.map(orderItem => ( */}
                    <div className="confirm_order_item_display">
                        <img src={order.image} alt ="product_image" style = {{}}/>
                        <div>
                            <p>{order.title}</p>
                            <p>size : &nbsp; &nbsp; &nbsp; {order.size}</p>
                            <p>color : &nbsp; &nbsp; &nbsp;{order.color}</p>
                            <p>quantity : &nbsp; &nbsp;{order.quantity}</p>
                            <p>price : &nbsp;  &nbsp;  &nbsp; ${order.price}</p>
                        </div>
                    </div>
                {/* ))} */}
            </div>

            {/* <CurrencyFormat
                renderText={(value) => (
                    <h3 style = {{marginTop: '30px'}}>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}                
            />          */}
        </div>
    )
}

export default Order;
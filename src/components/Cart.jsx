import React from 'react'
import prod from '../data/product'


function Cart(props) {
  const cartprod=prod.filter((items)=>props.cart[items.id] >0)
 
  
  return (
    <>
    <div style={{backgroundColor:"lightgrey"}}>
    <h1 style={{textAlign:"center", marginTop:"10px",color:"black"}}>Your Cart</h1>
     <div >
      {cartprod.map((items) => {
        const quantity = props.cart[items.id];

        return (
          <div
            key={items.id}
            className="d-flex align-items-center border border-secondary rounded p-3 mb-3"
          >
        
              <div>
              <img
                src={items.image}
                width="180"
                // height="180"
                alt={items.name}
                style={{ objectFit: "cover" }}
              />
            </div>

           <div className="ms-4">
              <h4>{items.name}</h4>

              <p>Price: ₹{items.price}</p>

              <p>Quantity: {quantity}</p>

              <p>
                <strong>
                  Total: ₹{items.price * quantity}
                </strong>
              </p>
            </div>
           
          </div>
        );
      })}
        </div>
        </div>
    
    </>
  )
}

export default Cart

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
    {/* <div className="cart-info">
       <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </CardGroup>
</div> */}
 {/* <div className="container mt-4">
          <div className="card border border-secondary border-3">
            <img
              src={image}
              alt="Not Found"
              className="card-img-top "
              style={{ width: "100%", height: 250 }}
            />
            <div className="card-body">
              <h5 className="card-title text-danger"> ₹{price}</h5>
              <p style={{ width: "100%" ,color:"black"}}> {name || "Anonymous"}</p>
            </div>
          </div>
        </div> */}
    </>
  )
}

export default Cart

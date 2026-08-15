import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Product from "./Product";

export default class Productitems extends Component {
  // addTocart(prod){
  //   console.log("added",prod)
  //   alert("Added to Cart")

  // }
  render() {
    let { id, name, price, image, category } = this.props;
    return (
      <>
        <div className="container mt-4">
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
            <div className="d-grid gap-2  ">
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="danger fs-1 "
                  onClick={() => this.props.decrement(id)}
                >
                  -
                </Button>
                {/* <Button variant="primary "  onClick={()=>this.props.addToCart(id)}>Cart </Button> */}

                <Button variant="light">cart <br />{this.props.cart[id] || 0}</Button>
                <Button
                  variant="danger fs-1"
                  onClick={() => this.props.increment(id)}
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </>
    );
  }
}

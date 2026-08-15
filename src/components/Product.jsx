import React, { Component} from "react";
import "../App.css";
import Productitems from "./Productitems";
import prod from '../data/product'

export default class Product extends Component {
  render() {
  
    const jeans = prod.filter((items) => items.category === "jeans");
    const watch = prod.filter((items) => items.category === "Watch");
    const shoes = prod.filter((items) => items.category === "Shoes");
    return (
      <>


        <div className="container mt-3">
          <div className="row">
            <h2>Jeans</h2>
            {jeans.map((element) => {
              return (
                <div className="col-md-3 d-flex mb-4 " key={element.id}>
                  <Productitems
                    cart={this.props.cart}

                    addToCart={this.props.addToCart}
                    id={element.id}
                    increment={this.props.increment}
                    decrement={this.props.decrement}
                    name={element.name}
                    price={element.price}
                    image={element.image}
                    category={element.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h2>Watch</h2>
            {watch.map((element) => {
              return (
                <div className="col-md-3 d-flex mb-4 " key={element.id}>
                  <Productitems
                    cart={this.props.cart}
                    addToCart={this.props.addToCart}
                    increment={this.props.increment}
                    decrement={this.props.decrement}
                    id={element.id}
                    name={element.name}
                    price={element.price}
                    image={element.image}
                    category={element.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h2>Shoes</h2>
            {shoes.map((element) => {
              return (
                <div className="col-md-3 d-flex mb-4 " key={element.id}>
                  <Productitems
                    cart={this.props.cart}
                    addToCart={this.props.addToCart}
                    increment={this.props.increment}
                    decrement={this.props.decrement}
                    id={element.id}
                    name={element.name}
                    price={element.price}
                    image={element.image}
                    category={element.category}
                  />
                </div>
              );
            })}
          </div>
        </div>

       
      </>
    );
  }
}

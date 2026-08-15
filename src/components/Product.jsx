import React, { Component, useState } from "react";
import { Card, CardGroup, Button, ButtonGroup } from "react-bootstrap";
import "../App.css";
import Productitems from "./Productitems";
import prod from '../data/product'

export default class Product extends Component {
  // constructor(props){
  //   super()
  //   this.state={prod:[]}
  // }
  render() {
    // const prod = [
    //   {
    //     id: 1,
    //     name: " Lee Slim Fit Jeans (Men) – Soft Stretch Denim, Dark Blue",
    //     category: "jeans",
    //     price: 2199,
    //     image: "/j3.jpg",
    //   },
    //   {
    //     id: 2,
    //     name: "Pepe Jeans Skinny Fit Jeans (Women) – Premium Stretch Denim.",
    //     category: "jeans",
    //     price: 2799,
    //     image: "/j4.jpg",
    //   },
    //   {
    //     id: 3,
    //     name: "  U.S. Polo Assn. Regular Fit Jeans – Comfortable Everyday Wear",
    //     category: "jeans",
    //     price: 1899,
    //     image: "/j5.jpg",
    //   },
    //   {
    //     id: 4,
    //     name: "             Wrangler High-Rise Baggy Jeans (Women) – Cotton Blend, Blue",
    //     category: "jeans",
    //     price: 1999,
    //     image: "/jeans2.jpg",
    //   },
    //   {
    //     id: 5,
    //     name: " Apple Watch Series 10 – 46mm Display, Heart Rate Monitor",
    //     category: "Watch",
    //     price: 29000,
    //     image: "/wat1.jpg",
    //   },
    //   {
    //     id: 6,
    //     name: "Samsung Galaxy Watch7 –  Bluetooth, Sleep Tracking",
    //     category: "Watch",
    //     price: 2000,
    //     image: "/wat2.jpg",
    //   },
    //   {
    //     id: 7,
    //     name: "  Noise ColorFit Pro 5 –  AMOLED,Comfortable Everyday Wear",
    //     category: "Watch",
    //     price: 5000,
    //     image: "/wat3.jpg",
    //   },
    //   {
    //     id: 8,
    //     name: "boAt Lunar Pro LTE – 1.39 AMOLED, GPS, Bluetooth Calling",
    //     category: "Watch",
    //     price: 2000,
    //     image: "/wat5.jpg",
    //   },
    //   {
    //     id: 9,
    //     name: "Nike Air Force 1 – Leather Upper, Air Cushioning",
    //     category: "Shoes",
    //     price: 7999,
    //     image: "/sh1.png",
    //   },
    //   {
    //     id: 10,
    //     name: "Puma RS-X – Lightweight, Breathable Mesh",
    //     category: "Shoes",
    //     price: 5499,
    //     image: "/sh3.jpg",
    //   },
    //   {
    //     id: 11,
    //     name: "New Balance 574 – Suede & Mesh, Everyday Comfort",
    //     category: "Shoes",
    //     price: 5999,
    //     image: "/sh4.jpg",
    //   },
    //   {
    //     id: 12,
    //     name: "Converse Chuck Taylor All Star – Canvas High-Top, Classic Style",
    //     category: "Shoes",
    //     price: 4999,
    //     image: "/sh5.jpg",
    //   },
    // ];
    const jeans = prod.filter((items) => items.category == "jeans");
    const watch = prod.filter((items) => items.category == "Watch");
    const shoes = prod.filter((items) => items.category == "Shoes");
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

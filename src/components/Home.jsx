import React from "react";
import { Image ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Image
        src="/bg"
        fluid
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          // opacity: "",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          width:"100%",
          textAlign: "center",
        }}
      >
        <h1 className="text-white fs-1">Welcome To </h1>{" "}
        <h2 className="text-white fs-1">Shoppy</h2>
         <Button variant="dark"as={Link} to="/product">Shop Now</Button>
      </div>
        
    </>
  );
}

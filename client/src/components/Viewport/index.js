import React, { useEffect } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import API from "../../utils/API";

const products = [
    {
        price: "$149.99",
        description: "The best TV ever!"
    },
    {
        price: "$249.99",
        description: "The worst TV ever!"
    },
    {
        price: "$549.99",
        description: "The best TV in the world!"
    },
    {
        price: "$1149.99",
        description: "The best TV ever!"
    },
    {
        price: "$1499.99",
        description: "The best TV ever!"
    },
]

const Viewport = () => {
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        let test = "nintendo"
        API.getProducts(test)
      .then(res => {
        console.log("Products Array:");
        console.log(res.data);
      })
      .catch(err => console.log(err));
    }, [])


    return (
        <Container className= "justify-content-center overflow-auto" id="viewport">
            {products.map(product => (
                <Row className="product">
                    <Col md={3}>
                    <div className="imagePic">
                        {/* <img src={product.img}/> */}
                        <FontAwesomeIcon icon={ faTv } size="3x" />
                    </div>
                    </Col>
                    <Col md={3}>
                        <p>{product.price}</p>
                    </Col>
                    <Col md={3}>
                        <p>{product.description}</p>
                    </Col>
                    <Col md={3}>
                        <Button id ="cartBtn" variant="warning">Add to Cart</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default Viewport;

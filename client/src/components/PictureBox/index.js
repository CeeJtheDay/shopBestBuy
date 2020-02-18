import React from "react";
import { Container } from "react-bootstrap";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const PictureBox = () => {
    return (
    <Container id="cartBorder">
        <div id="shop">SHOP</div>
        <FontAwesomeIcon icon={faShoppingBasket} size="7x" color="#FFDF00"/>
    </Container>
    )
}

export default PictureBox;

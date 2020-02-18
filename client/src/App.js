import React, { useState, useEffect } from 'react';
import Navigate from "./components/Navigate";
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import PictureBox from "./components/PictureBox";
import Viewport from "./components/Viewport";
import SearchContext from "./utils/SearchContext";
import API from "./utils/API";

// const List = () => {
//   const {list, setList} = setState({});
// }

function App() {

  const [cartModalShow, setCartModalShow] = useState(false);
  const [ products, setProducts ] = useState([])
  const [ query, setQuery ] = useState({});
  const queryVal = { query, setQuery };

  const loadProducts = () => {
      API.getProducts(query)
    .then(res => {
      console.log(res.data);
      setProducts(res.data)
    })
    .catch(err => console.log(err));
  }
    useEffect(() => {
        loadProducts();
    })
    

  // library.add( faTag, faShoppingCart)

  return (
    <Container id="main" products={products}>
      <SearchContext.Provider value={queryVal}>
      <Row>
        <Navigate cartModalShow={cartModalShow} setCartModalShow={setCartModalShow}/>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto">
          <PictureBox />
        </Col>
      </Row>
      <Row products={products}>
        <Container products={products}>
          <Viewport products={products}/>
        </Container>
      </Row>
      </SearchContext.Provider>
    </Container>
  );
}

export default App;

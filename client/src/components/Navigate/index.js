import React from "react";
import "./style.css";
import CartModal from "../CartModal";
import { Navbar, Nav, FormControl, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import SearchContext from "../../utils/SearchContext";


function Navigate({ setCartModalShow, cartModalShow }) {
  const { query, setQuery } = React.useContext(SearchContext);
  // const [searchState, setSearchState] = useState({
  //   query: ""
  // })

  // const updateQuery = (val) => {
  //   setSearchState({query: val})
  // }
  // const getValue = () => {
  //   let curQuery = document.getElementById("searchValue");
  //   setQuery({ query: curQuery.value });

  //   return curQuery.value;

  // }

  function handleSearchChange(e) {
    e.preventDefault();
    let thisQuery = document.getElementById("searchValue");
    setQuery(thisQuery.value);
    console.log(query);
  };

  return (
      <Container>
        <Navbar bg="primary" variant="dark" expand="lg" id="nav" cartmodalshow={cartModalShow} setcartmodalshow={setCartModalShow}>
          <Navbar.Brand href="#home">
            <i>Shop</i> Best Buy<FontAwesomeIcon icon={faTag} size="2x" color="#FFDF00" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" setcartmodalshow={setCartModalShow}>
            <Nav className="mr-auto">
              <Nav.Link href="#" data-toggle="modal" data-target="#modalCart" onClick={() => setCartModalShow ? (setCartModalShow(true)) : (null)}>View Cart</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchValue" 
                />
              <SearchContext.Consumer>
                {(context) => {
                  return (
              <Button variant="warning" id="search" onClick = {handleSearchChange}>Search</Button>
                  )
                }}
              </SearchContext.Consumer>
            </Form>
          </Navbar.Collapse>
          <CartModal
            show={cartModalShow}
            onHide={() => setCartModalShow(false)}
          />
        </Navbar>
      </Container>
  );
}

export default Navigate;

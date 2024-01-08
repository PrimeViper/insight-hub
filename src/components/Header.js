import React from "react";
import Switch from './Switch';
import logo from "../assets/logo.jpeg";
import { Container, Navbar, Dropdown, Image } from "react-bootstrap";

const Header = ({darkMode, setDarkMode}) => {

  const categoryArray = ["Entertainment", "Business", "Science", "Sports", "Health", "Technology"];

  return (
      <Navbar bg={darkMode?"dark":"secondary"} data-bs-theme={darkMode?"dark":"secondary"} className="text-light">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} alt="LogoImg" width="50" height="50" />
          </Navbar.Brand>
          <Switch darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
            { 
              categoryArray && categoryArray.map((cat, i) => (
                <Dropdown.Item key={i}>{cat}</Dropdown.Item>
              ))
            }
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
  );
}

export default Header;
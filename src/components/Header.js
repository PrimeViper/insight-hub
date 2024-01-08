import React from "react";
import Switch from './Switch';
import logo from "../assets/logo.jpeg";
import { Container, Navbar, Image, Form } from "react-bootstrap";

const Header = ({ darkMode, setDarkMode, category, setCategory, categoryDetails }) => {
  
  return (
    <>
      <Navbar bg={darkMode ? "dark" : "secondary"} data-bs-theme={darkMode ? "dark" : "secondary"} className="text-light">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} alt="LogoImg" width="50" height="50" />
          </Navbar.Brand>
          <div className="w-50"></div>
          <Form.Group className="d-none d-md-block">
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} className="text-capitalize">
              {categoryDetails.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
        </Container>
      </Navbar>
      <h1 className="text-capitalize text-center mx-auto mt-4"><span className="badge text-bg-secondary" >{category}</span></h1>
    </>
  );
}

export default Header;
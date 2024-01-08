import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/logo.jpeg";
import "../components/CardItem.css";

const CardItem = ({ title, description, image, url }) => {
  return (
    <Card style={{ width: '18rem'}} className='singleCard m-2' >
      <Card.Img variant="top" src={image===null?logo:image}  style={{height:'150px',maxwidth:'360px'}}  />
      <Card.Body>
        <Card.Title>{title.slice(0,50)}</Card.Title>
        <Card.Text>
        {description?description.slice(0,75):"....."}
        </Card.Text>
        <Button variant="outline-light" href={url}>Read More...</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;

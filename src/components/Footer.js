import React from 'react';
import "../components/Footer.css"
import Button from 'react-bootstrap/Button';
import { RiHealthBookFill} from "react-icons/ri";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdSportsCricket } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";


const Footer = ({setCategory}) => {
  return (
    <div className='w-100 d-block d-md-none position-sticky bottom-0'>
      <div className="footer" data-bs-theme ="dark" style={{width:"100%",backgroundColor:"black",height:"50px"}}>
        <div className="d-flex justify-content-around">
            <Button variant="outline-light mb-2  " onClick={() => setCategory("general")}><IoSettings /></Button>{' '}
            <Button variant="outline-light mb-2 " onClick={() => setCategory("entertainment")}><FaRegFaceSmileWink /></Button>{' '}
            <Button variant="outline-light mb-2 " onClick={() => setCategory("sports")}><MdSportsCricket /></Button>{' '}
            <Button variant="outline-light mb-2 " onClick={() => setCategory("business")}><TbBusinessplan /></Button>{' '}
            <Button variant="outline-light mb-2 " onClick={() => setCategory("health")}><RiHealthBookFill /></Button>{' '}
            <Button variant="outline-light mb-2 " onClick={() => setCategory("technology")}><GrTechnology /></Button>{' '}
            <Button variant="outline-light mb-2 " onClick={() => setCategory("science")}><GiMaterialsScience /> </Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default Footer;

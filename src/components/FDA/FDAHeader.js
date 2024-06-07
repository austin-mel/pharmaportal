import React from 'react'
import { Row, Col } from "react-bootstrap";
import FDALogo from "../../images/FDALogo.png"
import Navbar from '../Navbar';

function FDAHeader() {
  return (
    <div className="fdaheader">
        <Row>
            <Col sm={2} className="justify-content-md-left" style={{ display: 'flex' }}><Navbar /></Col>
            <Col className="justify-content-md-center" style={{ display: 'flex' }}><img src={FDALogo} width="350" height="200" alt="JH Logo" className="fdalogo"></img></Col>
            <Col sm={2}></Col>
        </Row>
    </div>
  );
};

export default FDAHeader;

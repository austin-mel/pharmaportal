import React from 'react'
import { Row, Col } from "react-bootstrap";
import BavLogo from "../../images/BavariaLogo.jpg"
import Navbar from '../Navbar';

function BavariaHeader() {
  return (
    <div className="bavheader">
    <Row>
        <Col sm={2} className="justify-content-md-left" style={{ display: 'flex' }}><Navbar /></Col>
        <Col className="justify-content-md-center" style={{ display: 'flex' }}><img src={BavLogo} width="350" height="200" alt="JH Logo" className="jhlogo"></img></Col>
        <Col sm={2}></Col>
    </Row>
</div>
  );
};

export default BavariaHeader;

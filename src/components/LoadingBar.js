import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

function LoadingBar(){
    return(
        <div>
            <Row>
                <Col>
                    <Spinner animation="border" />
                </Col>
            </Row>
        </div>
    );
};

export default LoadingBar;
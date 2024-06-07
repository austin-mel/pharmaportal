import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../hooks/utils";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseFullscreenRoundedIcon from "@mui/icons-material/CloseFullscreenRounded";

function PatientModal(props){
    const id = props.uuid;

    useEffect(() => {
        fetchPatients();
    }, []);
  
      const [patients, setPatients] = useState([]);
  
      const fetchPatients = async () => {
        try {
          const { data } = await axios.get(API_URL);
    
          setPatients(data);
          console.log("Data:", data);
        } catch (err) {
          console.log("Error!", err)
        }
      };

      const [editor, setEditor] = useState(false);
      const [show, setShow] = useState(false);

    return(
        <div>
          <Button variant="primary" onClick={() => { setShow(true); }}>View Patient</Button>
            {editor === false ? ( 
                  <Modal show={show} onHide={() => { setEditor(false); setShow(false); }} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    {patients?.map((patient, key) => {
                            if (id === patient.uuid) {
                              return (
                                <div key={key}>
                                  <Modal.Header closeButton>
                                    <Modal.Title id={patient.uuid}>{patient.fname} {patient.lname}</Modal.Title>
                                  </Modal.Header>
                                  <Row>
                                    <Col>
                                      <Modal.Body>DOB: <b style={{ fontSize: 20 }}>{patient.dob}</b></Modal.Body>
                                    </Col>
                                  </Row>
                                  <Modal.Footer>
                                    <Button variant="primary" onClick={() => { setEditor(true); }}><EditRoundedIcon />Edit Info</Button>
                                    <Button variant="danger" onClick={() => { setEditor(false); setShow(false); }}><CloseFullscreenRoundedIcon />Close</Button>
                                  </Modal.Footer>
                                </div>
                              )
                            }
                          })}
                        </Modal>
            ) : ( 
              <Modal show={show} onHide={() => { setShow(false); setEditor(false); }} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              {patients?.map((patient, key) => {
                if (id === patient.uuid) {
                  return (
                    <div key={key}>
                      <Modal.Header closeButton>
                        <Modal.Title id={patient.uuid}>
                          <Form.Group className="mb-3" controlId="patientFirstName">
                              <Form.Label>First Name:</Form.Label>
                              <Form.Control type="patientFirstName" defaultValue={patient.name} />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="patientLastName">
                              <Form.Label>Last Name:</Form.Label>
                              <Form.Control type="patientLastName" defaultValue={patient.lastName} />
                          </Form.Group>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form.Group className="mb-3" controlId="patientDOB">
                          <Form.Label>DOB</Form.Label>
                          <Form.Control type="patientDOB" defaultValue={patient.dob} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="patienttest">
                          <Form.Label>Test</Form.Label>
                          <Form.Control type="patienttest" defaultValue={patient.dob} />
                        </Form.Group>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={() => { setEditor(false); }}><EditRoundedIcon />Save Info</Button>
                        <Button variant="danger" onClick={() => { setShow(false); setEditor(false); }}><CloseFullscreenRoundedIcon />Close</Button>
                      </Modal.Footer>
                    </div>
                  )
                }
              })}
            </Modal>
            )}
            {patients.map((patient, key) => {

            })}
        </div>
    );
};

export default PatientModal;
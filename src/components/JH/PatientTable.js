import React, { useState, useEffect } from 'react';
import { API_URL } from '../../hooks/utils';
import axios from 'axios';
import { Table, Row, Col, Button, Form } from 'react-bootstrap';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import LoadingBar from '../LoadingBar';
import PatientModal from './PatientModal';

function PatientTable(){
    useEffect(() => {
      fetchPatients();
      setTimeout(() => {
        setLoading(false);
      }, 6500);
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

    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState(false);
    const [filterName, setFilterName] = useState();
    const [filterYear, setFilterYear] = useState();
    const [filterMonth, setFilterMonth] = useState();

    function applyFilter(){
      const filterName = document.getElementById("filterName").value;
      const filterYear = document.getElementById("filterYear").value;
      const filterMonth = document.getElementById("filterMonth").value;
      setFilterName(filterName);
      setFilterYear(filterYear);
      setFilterMonth(filterMonth);
    };

    function clearFilter(){
      document.getElementById("filterName").value = null;
      document.getElementById("filterYear").value = null;
      document.getElementById("filterMonth").value = null;
    };

  return (
    <div>
      {loading === true ? (
        <LoadingBar/ >
      ) : (
        <div>
          <div className="tablefilter">
            <Row>
              <Col>
                <Button variant="warning" onClick={() => { setFilterStatus(true); applyFilter(); }}><FilterAltRoundedIcon /> Set Filter</Button>
              </Col>
              <Col>
                <Form.Control placeholder="Name" id="filterName" />
              </Col>
              <Col>
                <Form.Select id="filterMonth" aria-label="Select Month">
                  <option value="null">Select Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Control placeholder="Year" id="filterYear" />
              </Col>
              <Col>
                <Button variant="secondary" onClick={() => { setFilterStatus(false); clearFilter(); }}><ClearRoundedIcon /> Clear Filter</Button>
              </Col>
            </Row>
            <Row>
              <Button variant="outline-info" onClick={() => { fetchPatients(); }}><RefreshRoundedIcon /> Refresh Table</Button>
            </Row>
          </div>
          {filterStatus === true ? ( 
            <div>
            <div className="patienttable">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>UUID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>Insurance Number</th>
                    <th>Height (cm)</th>
                    <th>Weight (lbs)</th>
                    <th>Blood Pressure</th>
                    <th>Blood Type</th>
                    <th>Temperature</th>
                    <th>O Saturation</th>
                    <th>Allergies</th>
                    <th>Current Medications</th>
                    <th>Family History</th>
                    <th>Employment Status</th>
                    <th>Insurance Status</th>
                    <th>ICD-10 Health Codes</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, key) => {
                    if(filterMonth === "null"){
                      if((patient.fname.includes(filterName) || patient.lname.includes(filterName)) && patient.dob.includes(filterYear)){
                        return(
                          <tr key={key}>
                            <td><PatientModal uuid={patient.uuid}/></td>
                            <td>{patient.uuid}</td>
                            <td>{patient.fname}</td>
                            <td>{patient.lname}</td>
                            <td>{patient.dob}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        );
                      };
                    }
                    else{
                      if((patient.fname.includes(filterName) || patient.lname.includes(filterName)) && patient.dob.includes(filterYear) && patient.dob.substring(0, 2) === filterMonth){
                        return(
                          <tr key={key}>
                            <td><PatientModal uuid={patient.uuid}/></td>
                            <td>{patient.uuid}</td>
                            <td>{patient.fname}</td>
                            <td>{patient.lname}</td>
                            <td>{patient.dob}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        );
                      };
                    }
                  })}
                </tbody>
              </Table>
            </div>
            </div>
          ) : ( 
            <div className="patienttable">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>UUID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>Insurance Number</th>
                    <th>Height (cm)</th>
                    <th>Weight (lbs)</th>
                    <th>Blood Pressure</th>
                    <th>Blood Type</th>
                    <th>Temperature</th>
                    <th>O Saturation</th>
                    <th>Allergies</th>
                    <th>Current Medications</th>
                    <th>Family History</th>
                    <th>Employment Status</th>
                    <th>Insurance Status</th>
                    <th>ICD-10 Health Codes</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {patients.map((patient, key) => (
                  <tr key={key}>
                    <td><PatientModal uuid={patient.uuid}/></td>
                    <td>{patient.uuid}</td>
                    <td>{patient.fname}</td>
                    <td>{patient.lname}</td>
                    <td>{patient.dob}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </div>
            )}
        </div>
      )}
    </div>
  );
};

export default PatientTable;
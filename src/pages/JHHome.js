import React from 'react';
import JHHeader from "../components//JH/JHHeader";
import PatientTable from "../components/JH/PatientTable";
import PatientCards from "../components/JH/PatientCards";
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function JHHome(){
  const [view, setView] = useState("table");

  function handleSwitch(){
    if(view !== "table"){
      setView("table");
    }
    else{
      setView("cards");
    }
  };

  return(
    <div>
      <JHHeader />
      <br/>
      <Button onClick={() => { handleSwitch(); }}>View: {view}</Button>

      {view === "table" ? (
        <PatientTable />
       ) : ( 
        <PatientCards />
      )}
    </div>
  );
};

export default JHHome;

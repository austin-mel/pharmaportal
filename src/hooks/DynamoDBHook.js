import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from './utils.js';
import axios from 'axios';

export function DynamoDBHook() {
    const [patients, setPatients] = useState([]);

    const fetchPatients = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setPatients(data);
      } catch (err) {
        console.log("Error!", err)
      }
    };

    console.log(patients);
  
    useEffect(() => {
      fetchPatients();
    }, []);
  
    return (
      <div>

      </div>
    );
}




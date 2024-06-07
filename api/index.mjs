/* global fetch */
import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import { fetchPatients } from "./patient.mjs";

const app = express();
const port = 3001;

app.use(express.json());

if (process.env.DEVELOPMENT) {
    app.use(cors());
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/patient', async (req, res) => {
  try {
    const patients = await fetchPatients();

    res.send(patients.Items);
  } catch (error){
    res.status(400).send(error);
  }
})

app.post('/patient', async (req, res) => {
  try {
      const patient = req.body;
      const response = await createPatients(patient);

      res.send(response);
  } catch (err){
      res.status(400).send("Error creating patients:", {err})
  }
})

app.put('/patient', async (req, res) => {
  try {
      const patient = req.body;
      const response = await updatePatients(patient);

      res.send(response);
  } catch (err){
      res.status(400).send("Error updating patients:", {err})
  }
})

app.delete('/patient/:id', async (req, res) => {
  try {
      const {uuid} = req.params;
      const response = await deletePatients(uuid);

      res.send(response);
  } catch (err){
      res.status(400).send("Error deleting patients:", {err})
  }
})


if (process.env.DEVELOPMENT) {
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
}

export const handler = serverless(app);

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { UpdateCommand, PutCommand, ScanCommand, DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDBClient({ region: "us-west-1" });
const docClient = DynamoDBDocumentClient.from(client);

export const fetchPatients = async () => {
  const command = new ScanCommand({
        ExpressionAttributeNames:{ "#uuid": "uuid" },
      ProjectionExpression: "#uuid, fname, lname",
      TableName: "patient-data",
  });

  const response = await docClient.send(command);
  return response;
};

export const createPatients = async ({fname, lname}) => {
    const uuid = uuidv4();
    const command = new PutCommand({
        TableName: "patient-data",
        Item: {
            uuid: uuid,
            fname,
            lname
        }
    });
  
    const response = await docClient.send(command);
    return response;
  };

export const updatePatients = async ({uuid, fname, lname}) => {
    const command = new UpdateCommand({
        TableName: "patient-data",
        Key:{
            uuid
        },
        ExpressionAttributeNames: {
            "#uuid": "uuid"
        },
        UpdateExpression: "set fname = :fn, lname = :ln",
        ExpressionAttributeValues: {
            ":fn": fname,
            ":ln": lname
        },
        ReturnValues: "ALL_NEW"
    })

    const response = await docClient.send(command);
    return response;
};

export const deletePatients = async (uuid) => {
    const command = new DeleteCommand({
        TableName: "patient-data",
        Key: {
            uuid
        }
    })

    const response = await docClient.send(command);
    return response;
};
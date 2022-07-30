import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION_NAME,
});

// const db = new AWS.DynamoDB({ apiVersion: 'latest' });
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: 'latest' });

export default db;
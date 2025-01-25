const { MongoClient } = require('mongodb');
const dotenv = require('dotenv').config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.CONNECTION_STRING;
const client = new MongoClient(url);

// Database Name
const dbName = 'lsmproject';

async function DbConnection() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);


  // the following code examples can be pasted here...

  return  db;
}
module.exports=DbConnection
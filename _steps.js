/**
1. npm init -y
2. create index.js file 
3.  
4. create .env file in the root(beside package.json) 
5. const express = require('express');
const cors = require('cors');
require('dotenv').config()
6. create app // const app = express();
7. use middleware //  app.use(cors()); app.use(express.json())
8. create an api in the index.js file to check if it works // app.get('/', (req, res) => {})
9. create port & app.listen // const port = process.env.PORT || 5000; app.listen(port, () => {console.log("Listening to port ", port)})
10. create database
11. create fakedata with _id
12. put database user name & password in .env file // DB_USER=geniusUser DB_PASS=LSiN0Gw0TURMW3yC
13. replace them in uri ${process.env.DB_USER}:${process.env.DB_PASS}
14. follow https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
15. To get single data: require ObjectId from mongodb // const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
16.  
 */
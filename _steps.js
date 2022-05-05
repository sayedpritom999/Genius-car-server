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
16. save orders for multiple user and save one account per user
17. filter orders info by email address
18. Install, create jwt token(create using node), 

 */


/**
 * Module 66_5 PRACTICE(MONGO DB CRUD WITH NODE, EXPRESS, REACT)
1. Create node.js a server with express(five steps)
2. connect to database
3. Create a post API to send data. Use cors & express.json as middleware here
4. create a simple react app with route: addProduct(react hook form. Name, price, quantity inputs). onSubmit saved data from server to database. C done
5. create manageProducts route. Create api to Load all data & load. 
6. add delete button, update button to each product. create delete api in server
7. create update route & link it with update button. 
8. use dynamic id. useParams. load data in a form in the update route using that id.
9. create API for Update product. onSubmit update the product. U done 
 */


// Heroku (server deploy):
// install heroku cli 
// make sure "const port = process.env.PORT || 5000;" & ""start": "node index.js"," is setup 
// heroku login 
// make sure to git add ., git commit -m"", 
// git push heroku main
// copy paste config vars from .env file to heroku settings > Config Vars 
// make sure to white listed all ip addresses from mongodb

// CONNECT SERVER WITH CLIENT

// UPDATE SERVER  
// make sure to git add ., git commit -m"", 
// git push heroku main

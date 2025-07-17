import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { login as login_app } from "./models/app.log.js"

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = require("path");

var express = require("express");
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname + '/')));

var cors = require('cors');
app.use(cors({origin: 'http://54.37.69.170:3000'})); // stops anyone else from accessing the data


app.post('/login', async function(req, res){
  const exec = await login_app.checkLogin(req.body); // Sends out our endpoint's request
  res.json(exec); // Send back the results of our script's execution
})

app.post('/getInfos', async function(req, res){
  console.log("\n\n---tr---\n getInfos \n----tr----\n", req.body) 
  const exec = await login_app.getInfos(req.body); 
  res.json(exec);
})

app.listen(999); 
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require('dotenv').config();
const port = process.env.PORT



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
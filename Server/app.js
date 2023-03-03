require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const initialize = require('./src/utils/initialize');
const database = require('./src/utils/database');
const port = process.env.PORT;
const mainRouter = require("./src/routes/main_route");

//set up the Server middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/api-questions",mainRouter.questions);
app.use("/api-levels",mainRouter.levels);
app.use("/api-users",mainRouter.users);

initialize().then(()=>{
    database();
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    })
}).catch(ex=>{
    console.log(ex.message);  
});
const questions = require("./questions_route");
const levels = require("./levels_route");
const users = require("./user_router");
const types = require('./types_route');
const packages = require('./package_route');
const blog = require("./blog_route");
module.exports ={
    questions,
    levels,
    users,
    types,
    packages,
    blog
}
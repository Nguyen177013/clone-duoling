const mongoose = require("mongoose");
const Types = new mongoose.Schema({
    type_name: {
        type: "String",
        required: true,
    },
});
mongoose.model("Types", Types);

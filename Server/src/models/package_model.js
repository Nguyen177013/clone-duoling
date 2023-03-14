const mongoose = require('mongoose');
const Packages = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    levels: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        ref: "Levels",
    },

});
module.exports = mongoose.model('Packages', Packages);
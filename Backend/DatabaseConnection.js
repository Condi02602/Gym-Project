const mongoose = require("mongoose");

const connectmongo = () => {
    mongoose.connect("mongodb://localhost:27017/fitgeek")

};

module.exports = connectmongo;
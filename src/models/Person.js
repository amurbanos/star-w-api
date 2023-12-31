const mongoose = require("../../db");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const Student = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("student", Student);

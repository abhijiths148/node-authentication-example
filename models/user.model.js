const config = require("config");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const mongoose = require("mongoose");

// simple user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  isAdmin: Boolean
});

// custom method to generate authToken
UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("myprivatekey")
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

// function to validate user
function validateUser(User) {
  const schema = {
    name: joi
      .string()
      .min(3)
      .max(50)
      .required(),
    email: joi
      .string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: joi
      .string()
      .min(5)
      .max(255)
      .required()
  };
  return joi.validate(User, schema);
}

exports.User = User;
exports.validate = validateUser;

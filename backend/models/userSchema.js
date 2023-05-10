const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    unique: true,
    require: true,
    maxlength: 20,
    match: [/^[a-zA-Z]+$/, 'must contain only letters'],
  },
  lastName: {
    type: String,
    unique: true,
    require: true,
    maxlength: 20,
    match: [/^[a-zA-Z]+$/, 'must contain only letters'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      'is not a valid email',
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
    select: false,
  },
});

module.exports = model('User', userSchema);

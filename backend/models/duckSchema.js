const { Schema, model } = require('mongoose');

const duckSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true,
    maxlength: 20,
    match: [/^[a-zA-Z]+$/, 'must contain only letters'],
  },
  image: {
    type: String,
    required: true,
    match: [
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      'is not a valid URL',
    ],
  },
  quote: {
    type: String,
    default: '',
    maxlength: 50,
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = model('Duck', duckSchema);

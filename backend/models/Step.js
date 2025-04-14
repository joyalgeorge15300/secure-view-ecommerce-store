
const mongoose = require('mongoose');

const StepSchema = new mongoose.Schema({
  step: {
    type: String,
    required: [true, 'Please add a step number']
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  order: {
    type: Number,
    required: [true, 'Please add the display order'],
    default: 0
  }
});

module.exports = mongoose.model('Step', StepSchema);

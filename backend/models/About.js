
const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  founded: {
    type: String,
    required: [true, 'Please add when the company was founded']
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  mission: {
    type: String
  },
  vision: {
    type: String
  },
  team: [
    {
      name: String,
      position: String,
      bio: String,
      image: String
    }
  ],
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Only allow one About document in the collection
AboutSchema.statics.checkOne = async function() {
  const count = await this.countDocuments();
  return count <= 1;
};

module.exports = mongoose.model('About', AboutSchema);

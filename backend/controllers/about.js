
const About = require('../models/About');

// @desc    Get about info
// @route   GET /api/about
// @access  Public
exports.getAbout = async (req, res, next) => {
  try {
    const about = await About.findOne();

    if (!about) {
      return res.status(404).json({
        success: false,
        error: 'About information not found'
      });
    }

    res.status(200).json({
      success: true,
      data: about
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create or update about info
// @route   PUT /api/about
// @access  Private (Admin)
exports.updateAbout = async (req, res, next) => {
  try {
    let about = await About.findOne();

    if (about) {
      // Update existing record
      about = await About.findByIdAndUpdate(about._id, req.body, {
        new: true,
        runValidators: true
      });
    } else {
      // Create new record
      about = await About.create(req.body);
    }

    res.status(200).json({
      success: true,
      data: about
    });
  } catch (err) {
    next(err);
  }
};


const Step = require('../models/Step');

// @desc    Get all steps
// @route   GET /api/how-it-works
// @access  Public
exports.getSteps = async (req, res, next) => {
  try {
    const steps = await Step.find().sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: steps.length,
      data: steps
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single step
// @route   GET /api/how-it-works/:id
// @access  Public
exports.getStep = async (req, res, next) => {
  try {
    const step = await Step.findById(req.params.id);

    if (!step) {
      return res.status(404).json({
        success: false,
        error: 'Step not found'
      });
    }

    res.status(200).json({
      success: true,
      data: step
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create step
// @route   POST /api/how-it-works
// @access  Private (Admin)
exports.createStep = async (req, res, next) => {
  try {
    const step = await Step.create(req.body);

    res.status(201).json({
      success: true,
      data: step
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update step
// @route   PUT /api/how-it-works/:id
// @access  Private (Admin)
exports.updateStep = async (req, res, next) => {
  try {
    let step = await Step.findById(req.params.id);

    if (!step) {
      return res.status(404).json({
        success: false,
        error: 'Step not found'
      });
    }

    step = await Step.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: step
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete step
// @route   DELETE /api/how-it-works/:id
// @access  Private (Admin)
exports.deleteStep = async (req, res, next) => {
  try {
    const step = await Step.findById(req.params.id);

    if (!step) {
      return res.status(404).json({
        success: false,
        error: 'Step not found'
      });
    }

    await step.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

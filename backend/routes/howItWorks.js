
const express = require('express');
const {
  getSteps,
  getStep,
  createStep,
  updateStep,
  deleteStep
} = require('../controllers/howItWorks');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getSteps)
  .post(protect, authorize('admin'), createStep);

router
  .route('/:id')
  .get(getStep)
  .put(protect, authorize('admin'), updateStep)
  .delete(protect, authorize('admin'), deleteStep);

module.exports = router;

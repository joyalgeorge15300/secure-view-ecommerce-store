
const express = require('express');
const {
  getAbout,
  updateAbout
} = require('../controllers/about');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getAbout)
  .put(protect, authorize('admin'), updateAbout);

module.exports = router;

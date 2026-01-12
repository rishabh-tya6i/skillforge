const express = require('express');
const { uploadFile } = require('../controllers/uploadController');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.post('/', protect, upload.single('image'), uploadFile);

module.exports = router;

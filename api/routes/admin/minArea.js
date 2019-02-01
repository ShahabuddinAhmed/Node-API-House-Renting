const express = require('express');
const router = express.Router();
const checkAdminAuth = require('../../middleware/adminAuth');
const minAreaController = require('../../controller/admin/minArea');

router.get('/all', minAreaController.getAllMaxArea);
router.post('/create', minAreaController.createMaxArea);
router.patch('/update/:minAreaID', minAreaController.updateMaxArea);
router.delete('/delete/:minAreaID', minAreaController.deteleteMaxArea);

module.exports = router;
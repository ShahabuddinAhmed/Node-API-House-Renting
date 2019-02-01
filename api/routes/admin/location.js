const express = require('express');
const router = express.Router();
const checkAdminAuth = require('../../middleware/adminAuth');
const locationController = require('../../controller/admin/location');

router.get('/all', locationController.getAllLocation);
router.post('/create', locationController.createLocation);
router.patch('/update/:locationID', locationController.updateLocation);
router.delete('/delete/:locationID', locationController.deteleteLocation);

module.exports = router;
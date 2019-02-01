const express = require('express');
const router = express.Router();
const checkAdminAuth = require('../../middleware/adminAuth');
const minMoneyController = require('../../controller/admin/minMoney');

router.get('/all', minMoneyController.getAllMaxMoney);
router.post('/create', minMoneyController.createMaxMoney);
router.patch('/update/:minMoneyID', minMoneyController.updateMaxMoney);
router.delete('/delete/:minMoneyID', minMoneyController.deteleteMaxMoney);

module.exports = router;
const express = require('express');
const router = express.Router();
const checkAdminAuth = require('../../middleware/adminAuth');
const maxMoneyController = require('../../controller/admin/maxMoney');

router.get('/all', maxMoneyController.getAllMaxMoney);
router.get('/:maxMoneyID', maxMoneyController.getOneMaxMoney);
router.post('/create', maxMoneyController.createMaxMoney);
router.patch('/update/:maxMoneyID', maxMoneyController.updateMaxMoney);
router.delete('/delete/:maxMoneyID', maxMoneyController.deleteMaxMoney);

module.exports = router;
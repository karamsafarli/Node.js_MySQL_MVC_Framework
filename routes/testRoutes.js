const express = require('express');
const router = express.Router();

const testPageController = require('../controllers/testController');

router.get('/', testPageController.renderTestPage);
router.post('/add-member', testPageController.addMember);
router.post('/update-member', testPageController.updateMemberById);
router.delete('/delete-member/:id', testPageController.deleteMemberById);


module.exports = router;
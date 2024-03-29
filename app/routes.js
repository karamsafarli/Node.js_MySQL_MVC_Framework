const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const testPageController = require('./controllers/testController');

router.get('/', homeController.getAllMembers);

router.get('/test', testPageController.renderTestPage);
router.post('/test/add-member', testPageController.addMember);
router.post('/test/update-member', testPageController.updateMemberById);
router.delete('/test/delete-member/:id', testPageController.deleteMemberById);


module.exports = router;
var express = require('express');
var router = express.Router();
var userController = require("../controllers/user.controller");

//Display screen users
router.get('/login', userController.login);

//Search users
router.get('/search', userController.search);

//Create users
router.get('/create', userController.create);

//Edit users
router.get('/update/:userId', userController.update);

//Delete users
router.get('/delete/:userId', userController.delete);

// METHOD POST

//Edit users
router.post('/update/:userId', userController.postUpdate);

//Create user  
router.post('/create', userController.postCreate);

module.exports = router;
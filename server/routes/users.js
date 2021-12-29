const express = require('express');
const router  = express.Router();

const users_api = require('../apis/users_api');

router.get('/logout', users_api.signOutUser);

router.post('/login', users_api.loginUser);

router.post('/signup', users_api.signUpUser);

router.put('/:id/fruit', users_api.addUserFruit);

router.put('/:id/session', users_api.addUserSession);

router.get('/:id/profile', users_api.getLoggedinUser);


module.exports = router;
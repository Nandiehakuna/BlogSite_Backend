const express = require('express');
const { getAuthors, edit_user, Login, Register, getUser, changeAvatar } = require('../Controllers/UserController');

const router= express.Router();

router.get('/', getAuthors)
router.patch('/editUser', edit_user )
router.post('/login', Login)
router.post('/register', Register)
router.get('/:id', getUser)
router.post('/changeAvatar', changeAvatar)



module.exports=router
const express = require('express');
const router = express.Router();

//Load user model
const User = require('../../models/User');


// @route   POST api/user/register
// @desc    Register user
// @access  public


router.get('/test', (req,res) => res.json({msg: 'Users api works'}));

module.exports = router;
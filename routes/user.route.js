const express = require('express');
const Router = express.Router();
const User = require('../models/user.model');
const userController = require('../controllers/user.controller');
const userAuth = require('../middlewares/auth.middleware');


/* ------------ Endpoint Definitions ----------- */
Router.get('/register',(req,res)=>
{
    res.render('register');
})

Router.post('/register', userController.Register);

Router.get('/login',(req,res)=>
{
    res.render('login');
})
Router.get('/api/email/:id',async(req,res)=>
{
    var email=req.params.id
    const user = await User.findOne({email:email});
    if(!user)
    {
        res.send("0");
    }
    else
    {
        res.send("1");
    }
})
Router.get('/api/username/:id',async(req,res)=>
{
    var uname=req.params.id
    const user = await User.findOne({username:uname});
    if(!user)
    {
        res.send("0");
    }
    else
    {
        res.send("1");
    }
})
Router.post('/login', userController.Login);

// Test route - to be deleted
Router.post('/test', userAuth('member'), (req, res) =>
    res.status(200).send('Authentication Middleware Works!')
);

module.exports = Router;

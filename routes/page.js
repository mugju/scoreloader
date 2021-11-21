const express = require("express");
const {isLoggedIn, isNotLoggedIn} = require("./middlewares");
const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = req.user;
    res.locals.followCount = 0;
    res.locals.followingCount = 0;
    res.locals.followIdList = [];
    next();
});

router.get('/profile',isLoggedIn, (req,res)=>{
    res.render('profile',{title : `내정보 - scoreloader`});
    
});

router.get('/join',isNotLoggedIn,(req,res)=>{
    res.render('join',{title:'회원 가입'});
});


router.get('/',(req,res,next)=>{
    const twits = [];
    res.render('main',{
        title : 'ScoreLoader',
        twits
    });
});

module.exports = router;

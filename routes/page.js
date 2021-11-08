const express = require("express");

const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = null;
    res.locals.followCount = 0;
    res.locals.followingCount = 0;
    res.locals.followIdList = [];
    next();
});

router.get('/profile',(req,res)=>{
    res.render('profile',{title : `내정보 - scoreloader`});
    
});

router.get('/join',(req,res)=>{
    res.render('join',{title:'회원 가입'});
});


router.get('/',(req,res,next)=>{
    const twins = [];
    res.render('main',{
        title : 'ScoreLoader',
        twins
    });
});

module.exports = router;

const express = require("express");
const { Post, User } = require("../models");
const {isLoggedIn, isNotLoggedIn} = require("./middlewares");
const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = req.user;
    res.locals.followCount = req.user ? req.user.Followers.length : 0;
    res.locals.followingCount = req.user ? req.user.Following.length : 0;
    res.locals.followIdList = req.user ? req.user.Following.map(f => f.id) : [];  
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
        twits,
    });
});
router.get('/', async (req, res, next)=>{
    try{
        const posts = await Post.findAll({
            include : {
                model : User,
                attributes : ['id',nick],
            },
            order : [['createdAt', 'DESC']],
        });
        res.render('main', {
            title : scoreloader,
            twits : posts,

        });
    }catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;

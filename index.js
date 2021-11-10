const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan"); //logger

const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv"); //환경변수

const path = require("path");

const passport = require("passport");

dotenv.config();
const pageRouter = require("./routes/page");

const app = express();

const {sequelize} = require("./models");
const passportConfig = require("./passport");
passportConfig();

app.set('port',process.env.PORT || 8080);
app.set('view engine','html');


//넌적스 사용.
nunjucks.configure('views',{
    express : app,
    watch : true
});

sequelize.sync({force:false})
    .then(()=> {
        console.log('database연결')
    })
    .catch((err)=>{
        console.error(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public'))); // 정적파일 담을거임

app.use(express.json()); // json 요청 받기위함.

app.use(express.urlencoded({extended : false})); //중첩객체처리

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitalized: false,
    secret : process.env.COOKIE_SECRET,
    cookie:{
        httpOnly : true,
        secure:false, //https가 아니라서..
    },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',pageRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 이 존재하지 않습니다.`);
    error.status = 404;
    next(error);
    
});


app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    
    res.render('error');
    
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트 대기중.');
});




import './db';
import './models/Contents';
import express from 'express'
import rootRouter from './routers/rootRouter';

const app = express();
const PORT = 4300;

app.set('view engine', "pug")
app.set('views', __dirname + "/views")

app.use(express.urlencoded({extended:true}))

// console.log("👀__dirname =>",__dirname)
// console.log("👀process.cwd() =>",process.cwd())

app.use('/', rootRouter)

app.get('/', (req, res)=>{
    res.send('Is this working well?')
})

/*
    게시판 만들기
    홈에 리스트
    생성, 수정, 삭제, 검색

    회원가입
    로그인, 로그아웃
*/





app.listen(PORT, ()=>{
    console.log(`😎 app is listening on PORT ${PORT}`)
});


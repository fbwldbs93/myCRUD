import './db';
import './models/Contents';
import express from 'express'
import rootRouter from './routers/rootRouter';

const app = express();
const PORT = 4300;

app.set('view engine', "pug")
app.set('views', __dirname + "/views")

app.use(express.urlencoded({extended:true}))

// console.log("π__dirname =>",__dirname)
// console.log("πprocess.cwd() =>",process.cwd())

app.use('/', rootRouter)

app.get('/', (req, res)=>{
    res.send('Is this working well?')
})

/*
    κ²μν λ§λ€κΈ°
    νμ λ¦¬μ€νΈ
    μμ±, μμ , μ­μ , κ²μ

    νμκ°μ
    λ‘κ·ΈμΈ, λ‘κ·Έμμ
*/





app.listen(PORT, ()=>{
    console.log(`π app is listening on PORT ${PORT}`)
});


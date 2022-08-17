import Users from '../models/Users'

export const getJoin =async(req, res)=>{
    return res.render('join', {pageTitle:"Join"})
}

export const postJoin =async(req, res)=>{
    const {name, password} = req.body;

    const exists = await Users.exists({$or : [{
        name : name
    }]})

    if(exists){
       return res.status(400).render('join', {pageTitle :"Join", errorMessage : "이미 가입되어있는 계정입니다." }) 
    }

    try{
        const users=await Users.create({
            name,
            password
        })

        console.log(`new Users! =>`, users)
    }catch(e){
        return res.status(400).render('join', {pageTitle :"Error", errorMessage : err._message}) 
    }
    
}


export const getLogin = (req, res)=>{
    res.render('login', {pageTitle:"Login"})
}

export const postLogin = (req, res)=>{
    const {name, password} = req.body;
}

// const contents = [
//     {
//         title : 'hello I\'m the new user',
//         content : 'this site is awesome!'
//     },
//     {
//         title : 'hello I\'m the secound user',
//         content : 'Wow this site is so nice!'
//     }
// ]

import Content from '../models/Contents'

export const home = async(req, res) =>{
    const contents = await Content.find({})
    res.render('home', {pageTitle:"home", contents} )
}

export const getUpload = (req, res) =>{
    res.render('upload', {pageTitle:'upload content'})
}

export const postUpload = async(req, res) =>{
    const {title, content, hashtags} = req.body;

    try{
        await Content.create({
            title,
            content,
            hashtags : hashtags.split(',').map(item =>{
                return `#${item}`
            })
        })
        return res.redirect('/')
    }catch(err){
        console.log(`${err} has occurred`);
        return res.status(400).render('upload', {pageTitle:"upload content", errMsg : err._message})
    }
    

}

export const watch= async(req, res)=>{

    const {id} = req.params

    console.log(`👀 id =>${id}`)

    const contents = await Content.findById(id)

    console.log(`👀 contents =>${contents}`)

    return res.render('watch', {pageTitle:contents.title, contents})
}

export const getEdit = async(req, res)=>{

    const {id} = req.params;

    const contents = await Content.findById(id)


    res.render('edit', {pageTitle:'edit Content', contents})
}

export const postEdit= async(req,res)=>{
    const {id} = req.params;

    const {title, content, hashtags} = req.body

    const contents = await Content.exists({_id : id})

    if(!contents){
        return res.statue(404).render('404', {pageTitle:"Contents has not found"})
    }


    await Content.findByIdAndUpdate(id, {
        title,
        content,
        hashtags : hashtags.split(',').map(item =>{
            return item.startsWith('#') ? item : `#${item}`
        })
    })

    return res.redirect(`/watch/${id}`)
}

export const deleteContent = async(req, res)=>{
    const {id} = req.params;

    await Content.findByIdAndDelete(id)

    return res.redirect('/')
}

export const search= async (req, res)=>{
    const {keyword} = req.query;

    let contents = []

    console.log(`👀query keyword =>`, keyword)

    if(keyword){
        contents = await Content.find({
            title: {
                $regex : new RegExp(keyword, "ig")
            }
        })
    }

    console.log(`👀contents =>`, contents)

    return res.render('search', {pageTitle: 'Search your content', contents})
    

    

    // const sameId = await Content.findById({_id : id})

    
}
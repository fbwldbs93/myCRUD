import express from "express";
import {home, getUpload, postUpload, watch, getEdit,postEdit, deleteContent, search} from '../controllers/contentController'
import {getJoin, postJoin,getLogin, postLogin } from '../controllers/userController'

const rootRouter = express.Router();


rootRouter.get('/', home)
rootRouter.get('/upload', getUpload)
rootRouter.post('/upload', postUpload)
rootRouter.get('/watch/:id', watch)
rootRouter.get('/watch/:id/edit', getEdit)
rootRouter.post('/watch/:id/edit', postEdit)
rootRouter.get('/watch/:id/delete', deleteContent)

rootRouter.get('/search', search)
rootRouter.route('/join').get(getJoin).post(postJoin)
rootRouter.route('/login').get(getLogin).post(postLogin)


export default rootRouter;
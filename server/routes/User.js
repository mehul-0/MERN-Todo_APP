import express from 'express'
import { Login } from '../controllers/User.js'
const Router = express.Router()

Router.post('/login', Login)

export default Router;
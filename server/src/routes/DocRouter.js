import express from 'express'
import { home } from '../services/DocServices.js'

const DocRouter = express.Router()

DocRouter.get("/",home)

export default DocRouter
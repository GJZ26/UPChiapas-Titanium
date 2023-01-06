import express from 'express'
import { home, version } from '../services/DocServices.js'

const DocRouter = express.Router()

DocRouter.get("/",home)
DocRouter.get("/version",version)

export default DocRouter
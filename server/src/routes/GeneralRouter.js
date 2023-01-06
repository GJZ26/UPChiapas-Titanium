import express from 'express'
import { home } from '../services/GeneralServices.js';

const GeneralRouter = express.Router();

GeneralRouter.get("/",home)

export default GeneralRouter;
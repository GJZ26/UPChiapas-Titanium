import express from 'express'
import { home } from '../services/GeneralServices.js';

const GeneralRoutes = express.Router();

GeneralRoutes.get("/",home)

export default GeneralRoutes;
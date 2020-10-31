import {Router} from "express";
import sampleController from "../controllers/sampleController";
const express = require('express');

const sampleRouter: Router = express.Router();

sampleRouter.get('/', sampleController.getSample);

export default sampleRouter;

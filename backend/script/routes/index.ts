import {Router} from "express";
import sampleRouter from "./sampleRouter";

const express = require('express');

const rootRouter: Router = express.Router();

rootRouter.use('/v1/sample', sampleRouter);

export default rootRouter;
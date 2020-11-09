import {Router} from "express";
import sampleRouter from "./sampleRouter";
import documentRouter from "./documentRouter";

const express = require('express');

const rootRouter: Router = express.Router();

rootRouter.use('/v1/sample', sampleRouter);
rootRouter.use('/v1/documents', documentRouter);

export default rootRouter;
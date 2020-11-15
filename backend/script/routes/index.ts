import {Router} from "express";
import sampleRouter from "./sampleRouter";
import documentRouter from "./documentRouter";
import tagRouter from "./tagRouter";

const express = require('express');

const rootRouter: Router = express.Router();

rootRouter.use('/v1/sample', sampleRouter);
rootRouter.use('/v1/documents', documentRouter);
rootRouter.use('/v1/tags', tagRouter);

export default rootRouter;
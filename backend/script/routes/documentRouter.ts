import {Router} from "express";
import documentController from "../controllers/documentController";

const express = require('express');

const documentRouter: Router = express.Router();

documentRouter.get('/', documentController.getDocuments);

export default documentRouter;

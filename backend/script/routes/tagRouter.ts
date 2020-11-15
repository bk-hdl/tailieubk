import {Router} from "express";
import tagController from "../controllers/tagController";
const express = require('express');

const tagRouter: Router = express.Router();
tagRouter.get('/all', tagController.getAllTags);
tagRouter.post('/create', tagController.createTag);
tagRouter.post('/modify', tagController.modifyTag);
tagRouter.post('/remove', tagController.removeTag);


export default tagRouter;
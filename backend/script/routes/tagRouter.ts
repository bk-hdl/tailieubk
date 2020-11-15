import {Router} from "express";
import tagController from "../controllers/tagController";
const express = require('express');

const tagRouter: Router = express.Router();

tagRouter.post('/', tagController.createTag);
tagRouter.get('/:id', tagController.getTag);
tagRouter.get('/', tagController.getAllTags);
tagRouter.put('/:id', tagController.modifyTag);
tagRouter.delete('/:id', tagController.removeTag);

export default tagRouter;
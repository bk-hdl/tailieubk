import {NextFunction, Request, Response} from "express";
import tagService from "../services/tagService";
import SimpleTagModel from "@common/models/tag/simpleTagModel";
import GeneralResponse from "@common/responses/generalResponse";
import PostTagRequest from "@common/requests/PostTagRequest";
import StatusCode from "@common/enums/statusCode"

class TagController {
    async getAllTags(request: Request, reponse: Response, next: NextFunction) {
        try {
            const tags: SimpleTagModel[] = await tagService.getAllTags();
            let tagsResponse = new GeneralResponse(tags, "OK")
            reponse.json(tagsResponse);
        } catch (error) {
            next(error)
        }    
    }

    async getTag(request: Request, reponse: Response, next: NextFunction) {
        try {
            let id = request.params.id; 
            let tag: SimpleTagModel = await tagService.getTag(Number(id));
            reponse.json(new GeneralResponse({tag}, 'OK'));
        } catch (error) {
            next(error)
        }      
    }

    async createTag(request: Request, reponse: Response, next: NextFunction) {
        try {
            let query: PostTagRequest = <PostTagRequest><unknown>request.query; 
            let tag: SimpleTagModel = await tagService.createTag(query);
            reponse.json(new GeneralResponse({tag}, 'OK'));
        } catch (error) {
            next(error)
        }    
    }

    async modifyTag(request: Request, reponse: Response, next: NextFunction) {
        try {
            let id: number = Number(request.params.id)
            let query: PostTagRequest = <PostTagRequest><unknown>request.query; 
            query.id = id;

            let tag: SimpleTagModel = await tagService.modifyTag(query);
            reponse.json(new GeneralResponse({tag}, 'OK'));
        } catch (error) {
            next(error)
        }     
    }

    async removeTag(request: Request, reponse: Response, next: NextFunction) {
        try {
            let id = request.params.id; 
            let success: Boolean = await tagService.removeTag(Number(id));
            reponse.json(new GeneralResponse({success}, 'OK'));
        } catch (error) {
            next(error)
        }      
    }
}

export default new TagController();
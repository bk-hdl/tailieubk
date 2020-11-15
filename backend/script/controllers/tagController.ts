import {NextFunction, Request, Response} from "express";
import tagService from "../services/tagService";
import SimpleTagModel from "@common/models/tag/simpleTagModel";
import GeneralResponse from "@common/responses/generalResponse";
import PostTagRequest from "@common/requests/PostTagRequest";
import StatusCode from "@common/enums/statusCode"

class TagController {
    async getAllTags(request: Request, reponse: Response, next: NextFunction) {
        try {
            let tags: SimpleTagModel[] = await tagService.getAllTags();
            let tagsResponse = new GeneralResponse(tags, "OK")
            reponse.json(tagsResponse);
        } catch (error) {
            next(error)
        }    
    }

    async createTag(request: Request, reponse: Response, next: NextFunction) {
        try {
            let query: PostTagRequest = <PostTagRequest><unknown>request.query; 
            let res: Boolean = await tagService.createTag(query);
            if(res){
                reponse.json(new GeneralResponse(res, 'OK', StatusCode.Success));
            } else {
                reponse.json(new GeneralResponse(res, 'Fail', StatusCode.Fail));
            }
        } catch (error) {
            next(error)
        }    
    }

    async modifyTag(request: Request, reponse: Response, next: NextFunction) {
        try {
            let query: PostTagRequest = <PostTagRequest><unknown>request.query; 
            let res: Boolean = await tagService.modifyTag(query);
            if(res){
                reponse.json(new GeneralResponse(res, 'OK', StatusCode.Success));
            } else {
                reponse.json(new GeneralResponse(res, 'Fail', StatusCode.Fail));
            }
        } catch (error) {
            next(error)
        }     
    }

    async removeTag(request: Request, reponse: Response, next: NextFunction) {
        try {
            let id = request.query.id; 
            let num = Number(id);
            if(isNaN(num) || typeof(num) !== 'number'){
                reponse.json(new GeneralResponse(null, 'Fail', StatusCode.Fail));
                return;
            }

            let res: Boolean = await tagService.removeTag(num);
            if(res){
                reponse.json(new GeneralResponse(res, 'OK', StatusCode.Success));
            } else {
                reponse.json(new GeneralResponse(res, 'Fail', StatusCode.Fail));
            }
        } catch (error) {
            next(error)
        }      
    }
}

export default new TagController();
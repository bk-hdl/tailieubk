import SimpleTagModel from "@common/models/tag/simpleTagModel";
import simpleTags from "../fakers/simpleTags";
import PostTagRequest from "@common/requests/PostTagRequest";

class TagService {
    async getAllTags(): Promise<SimpleTagModel[]> {
        //TODO: query from DB
        return simpleTags;
    }

    async createTag(req: PostTagRequest): Promise<Boolean> {
        /* TODO:
        - Check duplicate by slug 
        - Create SimpleTagModel
        - Generate tagId
        - Validate name/slug
        - Put object to DB
        */
       console.log("createTag: "+JSON.stringify(req))
        if(!req.slug || !req.name){
            return false;
        }
        if(req.slug.length === 0 || req.name.length === 0){
            return false;
        }
        let tag = new SimpleTagModel();
        tag.id = 100;
        tag.slug = req.slug;
        tag.name = req.name;
        return true;
    }

    async removeTag(id: number): Promise<Boolean> {
        /* TODO:
        - remove object from DB
        - return false if not exists
        */
        console.log("removeTag: "+id);
        if(id < 0 || id % 1 !== 0) {
            return false;
        }
        return true;
    }

    async modifyTag(req: PostTagRequest): Promise<Boolean> {
        /* TODO:
        - Check id exist
        - Validate slug/name
        - Get tag from db
        - modify tag object
        - Put object to DB
        */
       console.log("modifyTag: "+JSON.stringify(req));
        if(!req.id || !req.slug || !req.name){
            return false;
        }
        if(req.id < 0 || req.id % 1 !== 0) {
            return false;
        }
        if(req.slug.length === 0 || req.name.length === 0){
            return false;
        }
        // ...
        return true;
    }
}

export default new TagService();
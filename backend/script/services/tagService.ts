import SimpleTagModel from "@common/models/tag/simpleTagModel";
import simpleTags from "../fakers/simpleTags";
import PostTagRequest from "@common/requests/PostTagRequest";

class TagService {
    async getAllTags(): Promise<SimpleTagModel[]> {
        //TODO: query from DB
        return simpleTags;
    }

    async getTag(id: number): Promise<SimpleTagModel> {
        console.log("getTag: "+id);
        // query from db;
        let tag = simpleTags[id%7];
        return tag;
    }

    async createTag(req: PostTagRequest): Promise<SimpleTagModel> {
        /* TODO:
        - Check duplicate by slug 
        - Create SimpleTagModel
        - Generate tagId
        - Validate name/slug
        - Put object to DB
        */
        console.log("createTag: "+JSON.stringify(req))
        let tag = new SimpleTagModel();
        if(!req.slug || !req.name || req.slug.length === 0 || req.name.length === 0){
            return tag;
        }
        tag.id = 100;
        tag.slug = req.slug;
        tag.name = req.name;
        return tag;
    }

    

    async modifyTag(req: PostTagRequest): Promise<SimpleTagModel> {
        /* TODO:
        - Check id exist
        - Validate slug/name
        - Get tag from db
        - modify tag object
        - Put object to DB
        */
        console.log("modifyTag: "+JSON.stringify(req));
        let tag = new SimpleTagModel(); // query fromdb
        if(!req.id || !req.slug || !req.name || req.slug.length === 0 || req.name.length === 0){
            return tag;
        }
        if(req.id < 0 || req.id % 1 !== 0) {
            return tag;
        }
        // ...
        tag.id = req.id;
        tag.slug = req.slug;
        tag.name = req.name;
        tag.description = req.description ? req.description : "";
        return tag;
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
}

export default new TagService();
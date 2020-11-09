import CommonDocumentModel from "./commonDocumentModel";

export default class SimpleDocumentModel extends CommonDocumentModel {
    downloadCount: number = 0;
    viewCount: number = 0;
    saveCount: number = 0;
}
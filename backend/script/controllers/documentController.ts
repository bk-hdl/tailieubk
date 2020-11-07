import {NextFunction, Request, Response} from "express";
import GetDocumentsRequest from "@common/requests/getDocumentsRequest";
import PagingResponse from "@common/responses/pagingResponse";
import SimpleDocumentModel from "@common/models/document/simpleDocumentModel";
import GeneralResponse from "@common/responses/generalResponse";
import documentService from "../services/documentService";

class DocumentController {
    async getDocuments(request: Request, response: Response, next: NextFunction) {
        //TODO: Add validator and transform DTO
        const query: GetDocumentsRequest = <GetDocumentsRequest><unknown>request.query;                     //TODO: When add validator and DTO, find way to prevent trick like this.
        const documentResponse: PagingResponse<SimpleDocumentModel> = await documentService.getDocuments(query);
        response.json(new GeneralResponse(documentResponse, 'OK'));
    }
}

export default new DocumentController();
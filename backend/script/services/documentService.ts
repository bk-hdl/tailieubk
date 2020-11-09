import GetDocumentsRequest from "@common/requests/getDocumentsRequest";
import PagingResponse from "@common/responses/pagingResponse";
import SimpleDocumentModel from "@common/models/document/simpleDocumentModel";
import simpleDocuments from "../fakers/simpleDocuments";

class DocumentService {
    async getDocuments(query: GetDocumentsRequest): Promise<PagingResponse<SimpleDocumentModel>> {
        //TODO: Use real data from DB
        return new PagingResponse<SimpleDocumentModel>(
            simpleDocuments,
            22
        );
    }
}

export default new DocumentService();
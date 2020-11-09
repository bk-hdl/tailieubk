import PagingRequest from "./pagingRequest";
import StudyDocumentType from "../enums/studyDocumentType";

export default class GetDocumentsRequest extends PagingRequest {
    createdAt?: Date = new Date();
    school?: number = 0;
    faculty?: number = 0;
    subject?: number = 0;
    tags?: number[] = [];
    type?: StudyDocumentType = StudyDocumentType.Exam;
}
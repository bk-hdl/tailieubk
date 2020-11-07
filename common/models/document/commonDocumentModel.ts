import StudyDocumentType from "../../enums/studyDocumentType";

export default class CommonDocumentModel {
    id: number = 0;
    name: string = '';
    createdAt: Date = new Date();
    school: string = '';
    faculty: string = '';
    subject: string = '';
    tags: ({ id: number, title: string })[] = [];                //TODO: Add SimpleTag model
    type: StudyDocumentType = StudyDocumentType.Exam;
}
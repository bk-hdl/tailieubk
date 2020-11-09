import SimpleDocumentModel from "@common/models/document/simpleDocumentModel";
import StudyDocumentType from "@common/enums/studyDocumentType";

const simpleDocuments: SimpleDocumentModel[] = [];
for (let i = 0; i < 10; ++i) {
    const sD = new SimpleDocumentModel();
    const j = i % 3;
    if (j === 0) sD.type = StudyDocumentType.Exam;
    else if (j === 1) sD.type = StudyDocumentType.Slide;
    else sD.type = StudyDocumentType.Exercise;
    sD.downloadCount = i;
    sD.saveCount = i + 1;
    sD.viewCount = i + 2;
    sD.id = i;
    sD.name = `Simple document name ${i}`;
    sD.school = `School ${i}`;
    sD.subject = `Subject ${i}`;
    sD.faculty = `Faculty ${i}`;
    sD.tags = [
        {
            id: 0,
            title: 'GAY'
        },
        {
            id: 1,
            title: 'DCC'
        }
    ];
    simpleDocuments.push(sD);
}

export default simpleDocuments;
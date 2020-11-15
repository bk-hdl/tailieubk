import SimpleTagModel from "@common/models/tag/simpleTagModel";

const simpleTags: SimpleTagModel[] = [];
const exampleSlugs = ["c++", "java", "thầy-sách", "nâng cao", "đại cương", "tự chọn", "cơ bản"]
for (let i = 0; i < 7; i++) {
    const tag = new SimpleTagModel();
    tag.id = i;
    tag.slug = exampleSlugs[i];
    tag.description = "";
    simpleTags.push(tag);
}

export default simpleTags;
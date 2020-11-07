import {DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE} from "../contants/paging";

export default class PagingRequest {
    page: number;
    pageSize: number;

    constructor(page: number = DEFAULT_PAGE_NUMBER, pageSize: number = DEFAULT_PAGE_SIZE) {
        this.page = page;
        this.pageSize = pageSize;
    }
}
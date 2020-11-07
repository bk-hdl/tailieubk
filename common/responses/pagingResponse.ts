export default class PagingResponse<T> {
    constructor(
       public list: T[],
       public totalElements: number,
       public page?: number,
       public pageSize?: number
    ) {}
}
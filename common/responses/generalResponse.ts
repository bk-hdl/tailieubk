import StatusCode from "../enums/statusCode";

export default class GeneralResponse<T = any> {
    constructor(
       public data: T,
       public message: string = '',
       public statusCode: StatusCode = StatusCode.Success
    ) {}
}
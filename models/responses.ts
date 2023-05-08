export interface ISuccessResponse {
    success: boolean;
    data: any;
}
export interface IErrorResponse {
    success: boolean;
    error: any;
}
export type IResponse = ISuccessResponse | IErrorResponse;
export interface ILogin {
    username: string;
    password: string;
    rememberMe: number
};
export interface IResponse {
    code: number | string;
    data: any;
    msg: string;
};  
export const createEmptyLogin = (): ILogin => ({
    username: "",
    password: "",
    rememberMe: 1
});
export interface ISignOut {
    proId: string;
    workerId: string
}

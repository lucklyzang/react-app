export interface ILoginStore {
    loginNum: number;
    isLogin: boolean;
    userInfo: any;
    showLoading: boolean,
    changeIsLogin(msg:boolean):void;
    showLoadingChange(msg:boolean):void;
    storeUserInfo(msg:any):void
}
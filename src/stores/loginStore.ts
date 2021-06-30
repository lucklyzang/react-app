import { observable,makeObservable,action } from "mobx";
import {ILoginStore} from '@/models/store/ILoginStore'
class LoginStore implements ILoginStore {
    constructor(){
        makeObservable(this)
    }
    @observable loginNum = 3333;
    @observable isLogin = false;
    @observable userInfo = null;
    @observable showLoading = false;
    @action changeIsLogin(msg:boolean) {
        this.isLogin = msg
    };
    @action storeUserInfo(msg:any) {
        this.userInfo = JSON.parse(msg)
    };
    @action showLoadingChange(msg:any) {
        this.showLoading = msg
    };
}
export default LoginStore;
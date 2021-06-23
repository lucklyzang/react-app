import { observable, action, makeObservable } from "mobx";
import {IHomeStore} from '@/models/store/IHomeStore'
class HomeStore implements IHomeStore{
    constructor(){
        makeObservable(this)
    }
    @observable homeNum = 2;
    @action addNum() {
        this.homeNum += 1;
    }
    @action lessNum() {
        this.homeNum -= 1;
    }
}
export default HomeStore;
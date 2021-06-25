import React, { Component } from "react";
import {RouteComponentProps} from 'react-router-dom'
import { observer, inject } from "mobx-react";
import { Button } from 'antd-mobile';
import { getStore,setStore, removeStore,IsPC, pushHistory,gotoURL} from '@/common/ts/utils'
import { UserSignOut } from '@/serve/api/login'
import { Toast } from 'antd-mobile'
import HeaderTop from '@/components/headerTop/HeaderTop'
import {IHomeStore} from '@/models/store/IHomeStore'
import {ILoginStore} from '@/models/store/ILoginStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Icon from '@/components/icon/Icon'
library.add(fab,fas)
interface Props extends RouteComponentProps{
  homeStore: IHomeStore,
  loginStore: ILoginStore
}
const initialState = {
  num1:10,
  num2:11
};
type IState = typeof initialState;
@inject("homeStore")
@inject("loginStore")
@observer
class Home extends React.Component<Props,IState> {
  constructor(props:Props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.jumpOtherPage = this.jumpOtherPage.bind(this);
    this.signOutlogin = this.signOutlogin.bind(this)
  }

  jumpOtherPage ():void {
    this.props.history.push("/")
  }

  signOutlogin ():void {
    console.log('用户信息',this.props.loginStore.userInfo);
    UserSignOut(this.props.loginStore.userInfo.id,this.props.loginStore.userInfo.proId).then((res) => {
      if (res.code == 200) {
        this.props.loginStore.changeIsLogin(false);
        this.props.history.push("/");
      } else {
        Toast.info(`${res.msg}`);
      }
    })
    .catch((err) => {
      Toast.fail(`${err.msg}`);
    });
  }

  componentDidMount () {
    console.log('路由信息',this.props.location);
    // 控制设备物理返回按键测试
    pushHistory();
    gotoURL(() => {
      pushHistory();
      this.props.history.push("/");
    })
  }

  render() {
    return (
      <div>
        <HeaderTop bgColor="blue" left={<Icon icon='chevron-left' onClick={this.signOutlogin} size='2x' theme='dark' />} center={<span>{this.props.homeStore.homeNum}</span>} right={<Icon icon='ad' size='3x' theme='success' />}>
        </HeaderTop>
        <h1>首页数据源的number为:{this.props.homeStore.homeNum}</h1>
        <h1>loginStore的number为:{this.props.loginStore.loginNum}</h1>
        <Button type="ghost" onClick={() => {this.props.homeStore.addNum();console.log(this.props.homeStore.homeNum)}} >
          点击添加
        </Button>
        <Button  type="warning" onClick={() => {this.props.homeStore.lessNum();console.log(this.props.homeStore.homeNum)}}>
          点击删除
        </Button>
        <Button type="primary" onClick={this.jumpOtherPage}>跳转到登录页</Button>
        <Button type="primary" onClick={this.signOutlogin}>退出登录</Button>
        <Icon icon='ad' size='3x' theme='success' />
      </div>
    )
  }
}
export default Home
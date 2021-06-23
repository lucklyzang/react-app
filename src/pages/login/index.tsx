import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import {RouteComponentProps} from 'react-router-dom'
import { LogIn } from '@/serve/api/login'
import { Toast, List, InputItem, Icon } from 'antd-mobile'
import logoTopPng from '@/assets/images/logo-top.png'
import loginBtnPng from '@/assets/images/login-btn.png'
import './login.scss';
import { getStore,setStore, removeStore} from '@/common/ts/utils'
import {ILoginStore} from '@/models/store/ILoginStore'
interface Props {
  loginStore: ILoginStore,
  history: any
}
interface Props extends RouteComponentProps {

}
interface State{
  num1:number,
  accountName: any,
  password: any
}
@inject("loginStore")
@observer
class Login extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      num1:1,
      accountName: '',
      password: ''
    };
    this.jumpHomePage = this.jumpHomePage.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onUserNameChange (value:any): void {
    this.setState({
      accountName: value
    });
    console.log(this.state.accountName);
  }

  onPasswordChange (value:any): void {
    this.setState({
      password: value
    })
  }


  
  jumpHomePage (): void {
    this.props.loginStore.showLoadingChange(true);
    LogIn({username: this.state.accountName, password: this.state.password, rememberMe: 1}).then((res) => {
      this.props.loginStore.showLoadingChange(false);
      if (res.code == 200) {
        this.props.loginStore.storeUserInfo(res.data);
        this.props.loginStore.changeIsLogin(true);
        this.props.history.push('/home');
        console.log('用户信息',this.props.loginStore.userInfo,this.props.loginStore.isLogin);
      } else {
        Toast.info(`${res.msg}`);
      }
    })
    .catch((err) => {
      this.props.loginStore.showLoadingChange(false);
      Toast.fail(`${err.msg}`);
    });
  }

  render() {
    const { showLoading } = this.props.loginStore;
    return (
      <div className="login-wrapper">
        <div className="bg-icon">
          <img src={logoTopPng} alt="" />
        </div>
        <div className="form-wrapper">
          <List>
            <InputItem
              clear
              placeholder="请输入账号"
              value={this.state.accountName}
              onChange={this.onUserNameChange}
            >
              账号
            </InputItem>
            <InputItem
              clear
              type="password"
              placeholder="请输入密码"
              value={this.state.password}
              onChange={this.onPasswordChange}
            >
              密码
            </InputItem>
          </List>
          {
            showLoading ?
              (<div className="loading-wrapper">
                <Icon type="loading" size="lg" />
                <p>登录中···</p>
              </div>) : null
          }  
        </div>
        <div className="enter-wrapper" onClick={this.jumpHomePage}>
          <img src={loginBtnPng} alt="" />
        </div>
      </div>
    );
  }
}
export default Login
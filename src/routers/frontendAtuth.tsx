import React from "react";
import { inject, observer } from "mobx-react";
import { Route, Redirect, RouteComponentProps,withRouter } from "react-router-dom";
import {ILoginStore} from '@/models/store/ILoginStore'
interface Props extends RouteComponentProps {
  routerConfig: any,
  loginStore ?: ILoginStore
}
@inject("loginStore")
@observer
class FrontendAuth extends React.Component<Props> {
  constructor(props:Props) {
    super(props);
  }
  render() {
    console.log('props类型',this.props);
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    const isLogin = this.props.loginStore!.isLogin;
    // 如果该路由不用进行权限校验，登录状态下登录页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    const targetRouterConfig = routerConfig.find(
      (item:any) => item.path === pathname
    );
    console.log('匹配',targetRouterConfig);
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component} />;
    }
    if (isLogin) {
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if (pathname === "/") {
        return <Redirect to="/home" />
      } else {
        // 如果路由合法，就跳转到相应的路由
        if (targetRouterConfig) {
          return (
            <Route path={pathname} component={targetRouterConfig.component} />
          )
        } else {
          // 如果路由不合法，重定向到404页面
          return <Redirect to="/404" />;
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登录
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/" />;
      } else {
        // 非登陆状态下，路由不合法时，重定向至404
        return <Redirect to="/404" />;
      }
    }
  }
}
export default withRouter(FrontendAuth)
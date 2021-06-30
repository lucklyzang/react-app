import React from 'react'
import { Switch, RouteComponentProps,withRouter } from 'react-router-dom'
import { Routers } from '@/routers'
import { observer, inject } from "mobx-react"
import FrontendAuth from "@/routers/frontendAtuth"
import {ILoginStore} from '@/models/store/ILoginStore'
import {getStore} from '@/common/ts/utils'
interface Props extends RouteComponentProps {
  loginStore?: ILoginStore
}
@inject("loginStore")
@observer
class App extends React.Component<Props,{}>{
  constructor(props:Props) {
    super(props);
  }  
  render() { 
    return (
      <Switch>
        <FrontendAuth routerConfig={Routers} />
      </Switch>
    )
  }
  componentDidMount () {
    if (Boolean(getStore("isLogin"))) {
      this.props.loginStore!.changeIsLogin(Boolean(getStore("isLogin")))
    };
    if (getStore("userInfo")) {
      const msg = getStore("userInfo");
      this.props.loginStore!.storeUserInfo(msg)
    }
  }
}

export default App
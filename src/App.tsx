import React from 'react'
import { Switch } from 'react-router-dom'
import { Routers } from '@/routers'
import FrontendAuth from "@/routers/frontendAtuth";
class App extends React.Component{
  render() { 
    return (
      <Switch>
        <FrontendAuth routerConfig={Routers} />
      </Switch>
    )
  }
}

export default App
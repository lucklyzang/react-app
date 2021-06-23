import React, { Component,ReactNode } from "react"
import './headerTop.scss';
import { Toast, List, InputItem, Icon } from 'antd-mobile'
interface Props {
  left: ReactNode,
  center: ReactNode,
  right: ReactNode,
  bgColor: string
}
class HeaderTop extends Component<Props,{}> {
    constructor(props:Props) {
      super(props);
    }
    render() {
      return (
        <header className="header" style={{background:this.props.bgColor}}>
            <div className="header-left">
                {this.props.left}
            </div>
            <div className="header-left">
                {this.props.center}
            </div>
            <div className="header-right">
                {this.props.right}
            </div>
        </header>
      );
    }
  }
  export default HeaderTop
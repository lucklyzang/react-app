import React, { Component } from "react";
import notFoundPng from '@/assets/images/404.png'
class ErrorPage extends React.Component{
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div style={{display:'flex',flexFlow:'column',justifyContent:'center',minHeight:'100vh',background:'#f3f3f3'}}>
        <p style={{width:'100%',height:'350px'}}>
          <img style={{width:'100%',height:'100%'}} src={notFoundPng} alt="" />
        </p>  
      </div>
    );
  }
}
export default ErrorPage
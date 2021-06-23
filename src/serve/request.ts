import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import qs from 'qs'
import { showMessage } from "./status";
import { Toast } from 'antd-mobile';
import { getStore,setStore} from '@/common/ts/utils'
//http://blink.blinktech.cn/trans 测试地址
// http://blinktech.cn/trans 正式地址
//process.env.REACT_APP_BASE_URL
// 返回res.data的interface
export interface IResponse {
  code: number | string;
  data: any;
  msg: string;
}

let service:AxiosInstance = axios.create({
  baseURL: 'http://blink.blinktech.cn/trans',
  headers: {
    Accept: "application/json"
    // "Content-Type": "application/x-www-form-urlencoded"
  }
  // transformRequest: [
  //   function(data) {
  //     delete data.Authorization;
  //     data = qs.stringify(data);
  //     return data;
  //   }
  // ]
});

// axios实例拦截响应
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.headers.token) {
      setStore('carry_token', response.headers.token);
    };
    if (response.status === 200) {
      return response
    } else {
      Toast.offline(showMessage(response.status));
      return response
    }
  },
  // 请求失败
  (error: any) => {
    const {response} = error;
    if (response) {
      Toast.offline(showMessage(response.status));
      return Promise.reject(response.data)
    } else {
      Toast.fail('网络连接异常,请稍后再试!')
    }
  }
);

// axios实例拦截请求
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getStore('carry_token');
    if (token) {
      config.headers.Authorization = token
    }
    return config;
  },
  (error:any) => {
    return Promise.reject(error);
  }
)  

export default service
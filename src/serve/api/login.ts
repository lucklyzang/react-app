import request from '@/serve/request'
import { ILogin, ISignOut, IResponse  } from '@/models/request/login';
/**
 * @description: 用户登录
 * @params {ILogin} object
 * @return {Promise}
 */
export const LogIn = async (params: ILogin): Promise<IResponse> => {
  const res = await request.post('login/login', params);
  return res.data
};

/**
 * @description: 用户签退
 * @params {proId,workerId} string
 * @return {Promise}
 */
export const UserSignOut = async (proId: string,workerId: string): Promise<IResponse> => {
  const res = await request.get(`login/signOut/${proId}/${workerId}`);
  return res.data
};

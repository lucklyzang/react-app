/*
 * 存储localStorage
 * @param{String} name key值
 * @param{String} content value值
*/
export const setStore = (name: string, content: string) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/*
 * 获取localStorage
 * @param{String} name key值
*/
export const getStore = (name: string) => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/*
 * 删除localStorage
 * @param{String} name key值
*/
export const removeStore = (name: string) => {
  if (!name) return;
  window.localStorage.removeItem(name);
}


/**
 * 判断设备的操作系统环境(是否为pc)
*/
export const IsPC = (): boolean => {
   let flag;
　 let system = {
  　　win: false,
  　　mac: false,
  　　xll: false,
  　　ipad: false
  };
　//检测平台
　let p = navigator.platform,
      u = /(Android)/i.test(navigator.userAgent);
  　　system.win = p.indexOf("Win") == 0;
  　　system.mac = p.indexOf("Mac") == 0;
  　　system.xll = (p == "X11") || (p.indexOf("Linux") == 0);
  　　system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
      if (u) {
        flag = false
      } else if (system.win || system.mac || system.xll || system.ipad) {
        flag = true
      } else {
        flag = false
      }
  return flag
}

/**
 * 监听页面路由跳转
*/
export const pushHistory = (): void => {
  var state = {
    title: '',
    url: ''
  };
  window.history.pushState(state,state.title,state.url);
};

/**
 * 页面路由跳转回调
*/
export const gotoURL = (callback:any) => {
  window.onpopstate = null;
  window.onpopstate = function(){
    callback()
  }
}
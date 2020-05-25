/**
 * 项目通用接口请求方法
 */
import axios from 'axios';
import { getCookie, deepExtend } from '@/components/common/util/util';
import { Message } from 'element-ui';
export async function getData(config){
  if(JSON.stringify(config) === '{}' ){
    throw new Error('参数不能为空');
    return false;
  }
  if(!config.url){
    throw new Error('url参数为空');
    return false;
  }
  let defaultConfig = {
    url: '',
    method: 'get',
    transformRequest: [function (data, headers) {
      // 对 data 进行任意转换处理
      return data;
    }],
    transformResponse: [function (data) {
      // 对 data 进行任意转换处理
      return data;
    }],
    headers: {

    },
    data:null,
    params: null,
    timeout: 60000,
    withCredentials: true,
    responseType: 'json'
  };

  if (config.method==='post'){
    config.data=JSON.stringify(config.params);
    defaultConfig.headers["Content-Type"]="application/json";
    delete config.params;
  }
  if(config.apiKey){
    useCheckAuthorization && useCheckAuthorization();
    defaultConfig.headers["X-Gravitee-Api-Key"] = config.apiKey;
    defaultConfig.headers["Authorization"] = config.authorization ? config.authorization: getCookie('Authorization').replace(/^("|')|("|')$/g, '');
    delete config.apiKey;
  }
  let opts = deepExtend(true,defaultConfig,config);
  const instance = axios.create();
  instance.interceptors.request.use(opts => {
    return opts;
  }, err => {
  });
  instance.interceptors.response.use(opts => {
    return opts;
  }, err =>{
  })
  return await instance(opts).then(res => {
    if(res.status === 200) {
      let cacheName = opts.url;
      if(opts.headers["X-Gravitee-Api-Key"]) {
        cacheName += opts.data || opts.params;
      }
      return {
        success: true,
        data: res.data,
        cacheName: cacheName
      }
    }else {
      this.$message({
        type: 'error',
        message: '接口请求出错！'
      })
    }
  }).catch( res => {
    console.log(res)
  })
};

// 使用公共组暴露在站点容器的判断登录方法，如果异常或者不存在，则继续下一步，本方法返回true表示能正常使用公共组方法，false则继续执行原来逻辑
const useCheckAuthorization = function(){
  if(window.top.tab && window.top.tab.checkAuthorization){
      try{
          window.top.tab.checkAuthorization();
          return true;
      }catch(err){
          console.error('调用checkAuthorization报错:', err);
          return false;
      }
  }else{
      const flag = getCookie('Authorization') || getCookie('TOKEN_COOKIE_NAME');
      if (!flag) {
          needToRelogin();
      }
  }
};

const needToRelogin = function(){
  Message({
      type:"error",
      message:"当前用户信息失效，请重新登录",
      onClose:function(){
          window.top.location.href = "https://erpv2.banggood.cn/sso/home/logout";
      }
  });
};

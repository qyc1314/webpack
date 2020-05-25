/**
 * 需要缓存的接口用这个方法，保存在localStroage中的键名是请求的url
 * 缓存时间 cacheTime
 * @param {*} obj 
 */

 import {getData} from './ajaxRequest';

const cacheTime = 3*3600*1000; //接口缓存时间 3小时

const createCache = async function(obj){
  let cacheName = obj.url;
  if(obj.apiKey) {
    cacheName += JSON.stringify(obj.params)
  }
  let data = JSON.parse(localStorage.getItem(cacheName));
  let nowTime = new Date().getTime();
  if(data && ((nowTime - data.cacheTime) <= cacheTime)) {
    return data;
  }
  const res = await getData(obj);
  if(res.success){
    res["cacheTime"] = new Date().getTime();
    localStorage.setItem(res['cacheName'],JSON.stringify(res));
    return res;
  }
};

export {
  createCache
}
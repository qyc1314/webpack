/**
 * Created by qyc on 2019/4/9.
 *用户所有的接口均在这里调用
 */
import fetch from '../config/fetch';

let
  login//用户接口
;


const setPromise = data => {
  return new Promise((resolve, reject)=>{
    resolve(data);
  });
};

if(process.env.NODE_ENV === "mock"){
  //login = (loginInfo) => fetch("/user/login", {account:loginInfo.username, password:loginInfo.password});
}

export {
  login
}

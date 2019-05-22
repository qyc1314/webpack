/**
 * 接口封装方式.
 */
import axios from 'axios';
import qs from 'qs'
import {
  baseUrl
} from './env';

export default async (url = '', data ={}, type = 'GET') => {
  url = baseUrl + url;
  type = type.toLowerCase();

  const config = {
    method:type,
    url:url,
  };
  if(type === 'get'){
    config.params = data;
  }else{
    config.data = qs.stringify(data);
  }

  const response = await axios(config);
  if(response.status === 200){
    return response.data;
  }else if(response.state === 401){
    return null;
  }else{
    return null;
  }
}

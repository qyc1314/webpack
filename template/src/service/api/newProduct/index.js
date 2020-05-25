import { domainName } from '@/config/devApiDomain';
import { getData } from '@/service/ajaxRequest';
// 添加标签
export const labelSave = (params) => getData({ url: `${ domainName.newProduct }/scm-newproduct/label/save`, method: 'post', params });
// 获取用户信息
export const getcurrentuserroleinfo = (params) => getData({ url: `${ domainName.newProduct }/scm-newproduct/userrole/getcurrentuserroleinfo`, method: 'post', params });
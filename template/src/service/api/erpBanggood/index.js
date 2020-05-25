import { domainName } from '@/config/devApiDomain';
import { getData } from '@/service/ajaxRequest';
import {createCache} from '../../createCache';

export const getImgUploadApi = (params) => getData({url:`${domainName.erpBanggood}/webapi/SupplyProductImage/GetImageServiceParameters`,catch:true});
export const getPlatformOptions =  (params) => createCache({url: `${domainName.erpBanggood}/webapi/SupplyProductExternal/GetPlatformOptions`, params});
export const getCategoryInfo = (params) => getData({url: `${domainName.erpBanggood}/webapi/SupplyProductCategory/GetCategoryInfo`,params});
export const getByCodes = (params) => getData({url:`${domainName.erpBanggood}/webapi/SupplyProductImage/GetImageServiceParameters`});
export const getAllCategoryApi = (params) => createCache({url: `${domainName.erpBanggood}/webapi/SupplyProductCategory/GetAllCategory`});
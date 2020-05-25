import { domainName } from '@/config/devApiDomain';
import { getData } from '@/service/ajaxRequest';

export const getCategoryRequest = (params) => getData({url: `${domainName.itemBanggood}/category/listSubCategory`,withCredentials: false,params});

export const listCategoryByIdOrName = (params) => getData({url: `${domainName.itemBanggood}/category/listCategoryByIdOrName`, params,withCredentials:false});

export const listEbayUkInfoByCategoryId = (params) => getData({url: `${domainName.itemBanggood}/categoryMapping/listEbayUkInfoByCategoryId`,params,withCredentials:false});
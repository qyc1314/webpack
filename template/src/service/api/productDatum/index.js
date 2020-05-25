import { domainName } from '@/config/devApiDomain';
import { getData } from '@/service/ajaxRequest';

//获取产品经理选项的接口
export const getProductManagerEnum = (params) => getData({url:`${domainName.productDatum}/banggood-erp-product/product/getProductManagerEnum`});
// 根据新产品分类及平台查询tag组及tag数据(分类)【外部调用】
export const getTagListByCateIdPlatformApi = (params) => getData({ url: `${ domainName.productDatum }/banggood-erp-product/productTag/getTagListByCateIdPlatformApi`, method: 'post', params });
// 判断sku是否存在
export const isProductExists = (params) => getData({ url: `${ domainName.productDatum }/banggood-erp-product/product/isProductExists`, method: 'post', params });
// 获取产品信息
export const getSkuPoaInfo = (params) => getData({ url: `${ domainName.productDatum }/banggood-erp-product/product/getSkuPoaInfo`, method: 'get', params });
// 返回所属指定产品编号的POA信息列表
export const getPoaInfo = (params) => getData({ url: `${ domainName.productDatum }/banggood-erp-product/productOptionProperty/getPoaInfo`, method: 'get', params });
// 获取样品单信息
export const getSampleOrder = (params) => getData({ url: `${ domainName.productDatum }/banggood-erp-product/shootModelAppointment/getSampleOrder`, method: 'post', params });
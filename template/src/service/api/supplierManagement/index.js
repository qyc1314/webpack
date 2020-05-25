import { domainName } from '@/config/devApiDomain';
import { getData } from '@/service/ajaxRequest';

export const getSupplierGridListNew = (params) => getData({url: `${domainName.supplierManagement}/supplier/getSupplierGridListNew`, method: 'post', params});
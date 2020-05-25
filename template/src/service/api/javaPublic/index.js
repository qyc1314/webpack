import { domainName } from '@/config/devApiDomain';
import { getData } from '@/service/ajaxRequest';

export const getByRole = (params) => getData({url:`${domainName.javaPublic}/scm-java-api/user/getByRole`,method:'post',params});
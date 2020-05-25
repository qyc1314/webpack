import { domainName } from '@/config/devApiDomain';
import { getData } from '@/service/ajaxRequest';
import { getGateway } from '@/components/common/util/util';
import {createCache} from '../../createCache';

const user = getGateway("user");

export const userListByRoleName = (params) => getData({url: `${user.domain}/pps/user/UserService/GetUserListByRoleName`,method:'post', params: JSON.stringify({"roleName":["外发专员"]}), apiKey:user["api-key"]});

export const getDevManagerList = (params) => createCache({url: `${user.domain}/pps/user/UserService/GetUserListByRoleName`, method: 'post',  params: {"roleName":["开发经理-全"]}, apiKey:user["api-key"] });
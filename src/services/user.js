import {request} from '../utils/request';

export function checklist() {
  return request('/api/user/list',{method:'GET'});
}
export function register(userinfo){
  return request('/api/user/register',{method:'POST',body:userinfo});
}
export function login(userinfo){
  return request('/api/user/login',{method:'POST',body:userinfo});
}
export function update(userinfo){
  return request('/api/user/update',{method:'POST',body:userinfo})
}
export function authroute(){
  return request('/api/user/info',{method:'GET'});
}
export function getUsrList(type){
  console.log(type,'---getu')
return request(`/api/user/list?type=${type}`,{method:'GET'})
}
import requests from "@/utils/request";
export const getCode = () => requests({method:'GET',url:'/users/getCode'})
export const Login  = (data) => requests({method:'POST',url:'/users/login',data:data,})
export const Register  = (data) => requests({method:'POST',url:'/users/register',data:data,})
export const getUserInfo = (data) => requests({method:'GET',url:`/users/userinfo/`,params: {userId:data}})
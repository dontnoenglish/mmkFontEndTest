import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
const axiosInstance: AxiosInstance = axios.create({
    baseURL: '',
    timeout: 30000,
   });
   // 添加请求拦截器
   axiosInstance.interceptors.request.use(
     (config: AxiosRequestConfig) => {
    return config;
     },
     (error: any) => {
    return Promise.reject(error);
     },
   );
   // 添加响应拦截器
   axiosInstance.interceptors.response.use(
     (response: AxiosResponse) => {
    //
    return response.data;
     },
     (error: any) => {
        return Promise.reject(error);
      },
    );

export default axiosInstance;

import axiosInstance from './Instance';

export interface ApiResult<T> {
    code: number;
    message: string;
    data: T;
   }
   
   //这里只封装了常见的3个请求

   export async function get<T>(url: string, params?: any): Promise<ApiResult<T>> {
    const response = await axiosInstance.get<ApiResult<T>>(url, { params });
    return response.data;
   }
   
   export async function post<T>(url: string, data?: any): Promise<ApiResult<T>> {
    const response = await axiosInstance.post<ApiResult<T>>(url, data);
    return response.data;
   }

   export async function del<T>(url: string, params?: any): Promise<ApiResult<T>> {
    const response = await axiosInstance.delete<ApiResult<T>>(url, { params });
    return response.data;
   }
   
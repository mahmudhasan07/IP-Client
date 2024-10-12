import React from 'react';
import axios from 'axios'

export const AxiosSource = axios.create({
    baseURL: 'http://localhost:2000',
    // baseURL: 'https://ip-backend.vercel.app',
    withCredentials: true
})

const useAxios = () => {
    return AxiosSource
};

export default useAxios;
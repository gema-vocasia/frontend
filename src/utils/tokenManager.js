import { jwtDecode } from 'jwt-decode';

export const saveAccessToken = (token) => {
    localStorage.setItem('accessToken', token);  // Simpan token dengan nama yang konsisten
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');  // Ambil token dengan nama yang konsisten
};

export const removeAccessToken = () => {
    localStorage.removeItem('accessToken');  // Hapus token dengan nama yang konsisten
};

export const decodeToken = (token) => {
    return jwtDecode(token);  
};

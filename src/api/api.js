import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPosts = async () => {
    const response = await api.get('/posts');
    return response.data;
};

export const getComments = async () => {
    const response = await api.get('/comments');
    return response.data;
};

export const getAlbums = async () => {
    const response = await api.get('/albums');
    return response.data;
};

export const getPhotos = async () => {
    const response = await api.get('/photos');
    return response.data;
};

export const getTodos = async () => {
    const response = await api.get('/todos');
    return response.data;
};

export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

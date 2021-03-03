import { API_URL } from "apiUrl.js"
import axios from "axios"

const configfile = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};
const config = {
    headers: {
        'content-type': 'application/json'
    }
};
export const fileUpload = async (e) => {
    var fileName = e.target.files[0];
    const formData = new FormData();
    formData.append('postImage', fileName);
    let response = await axios.post(API_URL.fileUpload, formData, configfile)
    if (response.data.success) {
        const data = response.data.data
        return data
    }
}

export const createPost = async (postData) => {
    let response = await axios.post(API_URL.createPost, postData, config)
    if (response.data.success) {
        const data = response.data.data
        return data
    }
}


export const getCountries = async () => {
    let response = await axios.get(API_URL.getCountries, config)
    if (response.data.success) {
        const data = response.data.data
        return data
    }
}


export const getActivePosts = async (countryCode) => {
    let response = countryCode ? await axios.get(API_URL.getActivePosts + "?countryCode=" + countryCode, config) : await axios.get(API_URL.getActivePosts, config)
    if (response.data.success) {
        const data = response.data.data
        return data
    }
}


export const saveUserId = async (data) => {

    let response = await axios.post(API_URL.saveUserId, data, config)
    if (response) {
        const data = response.data.data
        return data
    }
}


export const handleVisibility = async (UUID) => {
    let data = { "userId": UUID }
    let response = await axios.post(API_URL.handleVisibility, data, config)
    if (response) {
        const data = response.data.data
        return data
    }
}

export const checkUserStatus = async (userId) => {
    let data = { "userId": userId }
    let response = await axios.post(API_URL.checkUserStatus, data, config)
    if (response) {
        const data = response.data.data
        return data
    } 
}

export const checkAllUser= async (id)=>{
    let data={
        allUserID: id
    }
    let response = await axios.post(API_URL.checkAllUserStatus, data, config)
    if (response) {
        const data = response.data.data
        return data
    } 
}
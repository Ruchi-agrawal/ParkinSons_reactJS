import { API_URL } from "apiUrl.js"
import axios from "axios"

export const fileUpload = async (e) => {
    var fileName = e.target.files[0];
    const formData = new FormData();
    formData.append('postImage', fileName);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    let response = await axios.post(API_URL.fileUpload, formData, config)
    if (response.data.success) {
        const data = response.data.data
        return data
    }
}

export const createPost = async (postData) => {
    const config = {
        headers: { 'content-type': 'application/json' }
    }
    let response = await axios.post(API_URL.createPost, postData, config)
    if (response.data.success) {
        const data = response.data.data
        return data
    }
}


export const getCountries = async () => {
    const config = {
        headers: { 'content-type': 'application/json' }
    }
    let response = await axios.get(API_URL.getCountries, config)
    if (response.data.success) {
        const data = response.data.data
        return data
    }
}

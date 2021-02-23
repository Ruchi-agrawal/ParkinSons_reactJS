let type = 'pro';
export const baseUrl = type=='dev'?`http://localhost:5000` :'http://52.30.228.217:5000'
const url = type=='dev'?`http://localhost:5000/api`: `http://52.30.228.217:5000/api`
export const API_URL = {
    fileUpload : `${url}/files/file_upload`,
    createPost: `${url}/posts/create_post`,
    getCountries :  `${url}/posts/get_country`,
    getPosts :`${url}/posts/get_all_post`
}
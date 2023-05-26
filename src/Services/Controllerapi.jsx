import axios from 'axios';
import toastr from 'toastr';

const urlbase = import.meta.env.VITE_APIURL;

export const Post = async (endpoint, data, token = null) => {
    
    const config = {
        headers:{
            'Authorization': token
        }
    }    
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.post(`${urlbase}${endpoint}`, data, config)
        toastr.success('data sent successfully!');
        return response;
    } catch(error){
        toastr.error(error.message);
    }
    
}

export const Get = async (endpoint, token) => {
    const config = {
        headers:{
            'Authorization': token
        }
    }
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.get(`${urlbase}${endpoint}`, config)
        return response.data
    } catch(error){
        toastr.error(error.message);
    }
}

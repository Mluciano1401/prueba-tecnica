import * as axios from 'axios';

export function ControllerPost(endpoint, data, token = null){
    axios({
        method: 'post',
        url: `https://apidev.kanvas.dev/v2/${endpoint}`,
        data: data,
        headers:{
            'Authorization': token
        }
      }).then((response) =>{
        return response;
    }).catch((error) => {
        throw error;
    });
}

export function ControllerGet(endpoint, token){
    axios({
        method: 'get',
        url: `https://apidev.kanvas.dev/v2/${endpoint}`,
        responseType: 'json',
        headers:{
            'Authorization': token
        }
    }).then((response) =>{
        return response;
    }).catch((error) => {
        throw error;
    });
}

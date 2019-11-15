export const makeAPICall = (url, options = {}) =>
    fetch(url, options)
        .then(response =>{
            if(!response.ok){
                throw  new Error(response.statusText)
            }
            return response;
        }).then(res => res.json());

export function weatherFetchDataSuccess(weather){
    return{
        type : "WEATHER_FETCH_DATA_SUCCESS",
        weather
    }
}

export function weatherFetchData(url) {
    return(dispatch)=>{
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw  new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(weather => dispatch(weatherFetchDataSuccess(weather)))
    }
}


export class ApiConnectionServer{

    postData(bodyData,endpoint,token){
        var requestData = JSON.stringify(bodyData);

        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint,
        {
            method:'POST',
            headers:{
                'x-access-token': token, 
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body:requestData
        })

        return peticion;
    }
    putData(bodyData,endpoint,id,token){
        var requestData = JSON.stringify(bodyData);

        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint+id,
        {
            method:'PUT',
            headers:{
                'x-access-token': token, 
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body:requestData
        })

        return peticion;
    }
    


    getData(endpoint,token){
        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint,
                            {
            method:'GET',
            headers:{
                'x-access-token': token, 
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            }
        });
        return peticion;
    }
    getDataId(endpoint,id,token){
        
        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint+id,
                            {
            method:'GET',
            headers:{
                'x-access-token': token, 
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            }
        })

     
        return peticion;
    }
    deleteDataId(endpoint,id,token){
        
        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint+id,
        {
            method:'DELETE',
            headers:{
                'x-access-token': token, 
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
           
        })

     
        return peticion;
    }
    



}

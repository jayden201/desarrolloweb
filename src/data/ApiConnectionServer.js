
export class ApiConnectionServer{

    postData(bodyData,endpoint){
        var requestData = JSON.stringify(bodyData);

        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint,
        {
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body:requestData
        })

        return peticion;
    }
    putData(bodyData,endpoint,id){
        var requestData = JSON.stringify(bodyData);

        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint+id,
        {
            method:'PUT',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body:requestData
        })

        return peticion;
    }
    


    getData(endpoint){
        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint);
        return peticion;
    }
    getDataId(endpoint,id){
        
        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint+id)

     
        return peticion;
    }
    deleteDataId(endpoint,id){
        
        var peticion = fetch("https://apidesarrollo12.herokuapp.com/api/" + endpoint+id,
        {
            method:'DELETE',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
           
        })

     
        return peticion;
    }
    



}

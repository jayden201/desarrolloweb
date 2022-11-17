
export class ApiConnectionServer{

    postData(bodyData,endpoint){
        var requestData = JSON.stringify(bodyData);

        var peticion = fetch("http://localhost:8080/api/" + endpoint,
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

        var peticion = fetch("http://localhost:8080/api/" + endpoint+id,
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
        var peticion = fetch("http://localhost:8080/api/" + endpoint);
        return peticion;
    }
    getDataId(endpoint,id){
        
        var peticion = fetch("http://localhost:8080/api/" + endpoint+id)

     
        return peticion;
    }
    deleteDataId(endpoint,id){
        
        var peticion = fetch("http://localhost:8080/api/" + endpoint+id,
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
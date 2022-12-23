import { API_URL } from "./ApiUrl"

export async function crear(sede, ciudad, direccion){

    const res = await fetch(API_URL+"/tienda",{
        method:"POST",
        mode: "cors",
        headers:{
            sede:sede,
            ciudad:ciudad,
            direccion:direccion,
            disponible:true,
            carros:[]
        }
    })

    if(res.ok){
        const data = await res.json()
        alert ("se creo una nueva tienda con el código "+data._id) 
    }else{
        alert("hay un error en la creacion")
    }
}
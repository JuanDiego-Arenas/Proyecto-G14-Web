import { API_URL } from "./ApiUrl"

export async function borrar(id){

    const res = await fetch(API_URL+"/tienda/" + id,{
        method:"DELETE"
    })

    if (res.ok){
        const data = await res.json()
        alert("se elimino la tienda "+data._id+" que esta ubicada en "+data.ciudad)
    }else{
        alert(res.status)
    }
}
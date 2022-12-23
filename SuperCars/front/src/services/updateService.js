import { API_URL } from "./ApiUrl"

export async function actualizar(id, sede, ciudad, direccion){
    console.log(sede)
    const res = await fetch(API_URL+'/tienda/'+ id,{
        method:"PUT",
        mode:'cors',
        headers:{
                
            sede:sede,
            ciudad:ciudad,
            direccion:direccion
        }
        })
    if (res.ok){
        alert("datos actualizados")
    }else{
        alert("no se puede actualizar datos")
    }
}
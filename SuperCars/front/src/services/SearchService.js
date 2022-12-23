import { API_URL } from "./ApiUrl"

export async function consultar(id){

        const res = await fetch(API_URL+'/tienda/' + id, {
            method:'GET',
        })

        if (res.ok){
            try{
                const data = await res.json()
                const validar = data.sede
                return data
            }catch(error){                
                alert("tienda no registrada")
                return null
            }
        }else{
            alert("falta registrar datos")
            return null
        }
    }
import React, { useState } from 'react';
import Boton from '../../components/forms/Boton/Boton';
import Input from '../../components/forms/Input/Input';
import GridColumn from '../../components/utils/GridColumn';
import "./Update.css"

function Update() {

    async function actualizar(evento){
        evento.preventDefault()

        if (editar==false){
            console.log(sede)
            const res = await fetch('http://localhost:8090/tienda/'+ id,{
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
        }else{
            alert("debes buscar una tienda")
        }
    }

    async function consultar(evento){
        evento.preventDefault()

        const res = await fetch('http://localhost:8090/tienda/' + id, {
            method:'GET',
        })

        if (res.ok){
            try{
            const data = await res.json()
            setSede(data.sede)
            setCiudad(data.ciudad)
            setdireccion(data.direccion)
            setEditar(false)
            }catch(error){
                alert("tienda no registrada")
            }
        }else{
            alert("falta registrar datos")
        }
    }

    const [id, setId] = useState("");
    const [sede, setSede] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [direccion, setdireccion] = useState("")
    const [editar, setEditar] = useState(true)
    

    return ( 
        <section>
            <div className='container grid'>
                <GridColumn className="top">
                    <form className='formulario' onSubmit={(evento)=>consultar(evento)}>
                        <h1 className='title'>Consulta</h1>
                        <Input onChange={(val)=>setId(val.target.value)}>codigo</Input>
                        <Boton style='fill' type='submit'>Buscar</Boton>
                    </form>
                </GridColumn>
                <GridColumn className="top">
                    <form className='formulario' onSubmit={(evento)=>actualizar(evento)}>
                        <h1 className='title'>Tienda {id}</h1>
                        <Input onChange={(val)=>setSede(val.target.value)} value={sede} disable={editar}>Sede</Input>
                        <Input onChange={(val)=>setCiudad(val.target.value)} value={ciudad} disable={editar}>Ciudad</Input>
                        <Input onChange={(val)=>setdireccion(val.target.value)} value={direccion} disable={editar}>Direccion</Input>
                        <Boton style='fill' type='submit'>Actualizar</Boton>
                    </form>
                </GridColumn>
            </div>
        </section>
     );
}

export default Update;
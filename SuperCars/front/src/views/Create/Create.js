import React, { useState } from 'react';
import Boton from '../../components/forms/Boton/Boton';
import Input from '../../components/forms/Input/Input';
import "./create.css"

function Create() {

    async function onSubmit(evento){
        
        evento.preventDefault()

        const res = await fetch("http://localhost:8090/tienda",{
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
            alert(res.status)
        }
    }

    const [sede, setSede] =useState("");
    const [ciudad, setCiudad] =useState("");
    const [direccion, setDireccion] =useState("");

    return ( 
        <section className='create'>
            <form className='formulario' onSubmit={(evento)=>onSubmit(evento)}>
                <h1 className='title'>Registro</h1>
                <Input onChange={(val)=>setSede(val.target.value)}>sede</Input>
                <Input onChange={(val)=>setCiudad(val.target.value)}>ciudad</Input>
                <Input onChange={(val)=>setDireccion(val.target.value)}>direccion</Input>
                <Boton style="fill" type="submit">registrar</Boton>
            </form>
        </section>
     );
}

export default Create;
import React, { useState } from 'react';
import Boton from '../../components/forms/Boton/Boton';
import Input from '../../components/forms/Input/Input';
import { crear } from '../../services/createService';
import "./Create.css"

function Create() {

    async function onSubmit(evento){
        
        evento.preventDefault()

        const res = crear(sede, ciudad, direccion)
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
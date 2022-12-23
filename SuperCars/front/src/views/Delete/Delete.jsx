import React, { useState } from 'react';
import Input from '../../components/forms/Input/Input';
import Boton from '../../components/forms/Boton/Boton'
import './Delete.css'
import { borrar } from '../../services/deleteServices';

function Delete() {

    async function onSubmit(event){
        event.preventDefault()

        const res = await borrar(id)
    }

    const [id, setId] = useState("");

    return ( 
        <section className='delete'>
            <form className='formulario' onSubmit={(evento)=>onSubmit(evento)}>
                <h1 className='title'>Eliminar</h1>
                <Input onChange={(val)=>setId(val.target.value)}>Codigo</Input>
                <Boton style='fill' type='submit'>Eliminar</Boton>
            </form>
        </section>
     );
}

export default Delete;
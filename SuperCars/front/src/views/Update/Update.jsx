import React, { useState } from 'react';
import Boton from '../../components/forms/Boton/Boton';
import Input from '../../components/forms/Input/Input';
import GridColumn from '../../components/utils/GridColumn';
import "./Update.css"
import { actualizar } from '../../services/updateService';
import { consultar } from '../../services/SearchService';

function Update() {

    async function update(evento){
        evento.preventDefault()
        if(editar==false){
            const res = await actualizar(id, sede, ciudad, direccion)
        }
    }

    async function search(evento){
        evento.preventDefault()

        const res = await consultar(id)
        if (res != null){
            setEditar(false)
            setSede(res.sede)
            setCiudad(res.ciudad)
            setdireccion(res.direccion)
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
                    <form className='formulario' onSubmit={(evento)=>search(evento)}>
                        <h1 className='title'>Consulta</h1>
                        <Input onChange={(val)=>setId(val.target.value)}>codigo</Input>
                        <Boton style='fill' type='submit'>Buscar</Boton>
                    </form>
                </GridColumn>
                <GridColumn className="top">
                    <form className='formulario' onSubmit={(evento)=>update(evento)}>
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
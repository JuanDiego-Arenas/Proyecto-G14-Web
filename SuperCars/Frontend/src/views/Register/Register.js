import React, { useState } from 'react';
import Button from '../../components/forms/Button/Button';
import Input from '../../components/forms/Input/Input';
import './Create.css';

function Register() {
    async function onSubmit(evento) {
        evento.preventDefault();

        const res = await fetch('http://localhost:8090/tienda', {
            method: 'POST',
            mode: 'cors',
            headers: {
                sede: sede,
                ciudad: ciudad,
                direccion: direccion,
                disponible: true,
                carros: [],
            },
        });

        if (res.ok) {
            const data = await res.json();
            alert('se creo una nueva tienda con el código ' + data._id);
        } else {
            alert(res.status);
        }
    }

    const [sede, setSede] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [direccion, setDireccion] = useState('');

    return (
        <section className="create">
            <form className="formulario" onSubmit={evento => onSubmit(evento)}>
                <h1 className="title">Agregar una nueva tienda</h1>
                <Input onChange={val => setSede(val.target.value)}>sede</Input>
                <Input onChange={val => setCiudad(val.target.value)}>
                    ciudad
                </Input>
                <Input onChange={val => setDireccion(val.target.value)}>
                    direccion
                </Input>
                <Button style="fill" type="submit">
                    Agregar
                </Button>
            </form>
        </section>
    );
}

export default Register;

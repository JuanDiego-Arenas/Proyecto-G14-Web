import React, { useState } from 'react';
import Button from '../../../components/forms/Button/Button';
import Input from '../../../components/forms/Input/Input';
import { API_URL } from '../../../services/api';
import './Create.css';
import '../../login/Login.css'

function Create() {
    async function onSubmit(evento) {
        evento.preventDefault();

        const res = await fetch(API_URL + '/tienda', {
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
        <section className="login">
            <div className='container'>
                <form
                    className="flex card form"
                    onSubmit={evento => onSubmit(evento)}
                >
                    <h1 className="title">Registro</h1>
                    <Input onChange={val => setSede(val.target.value)}>
                        sede
                    </Input>
                    <Input onChange={val => setCiudad(val.target.value)}>
                        ciudad
                    </Input>
                    <Input onChange={val => setDireccion(val.target.value)}>
                        direccion
                    </Input>
                    <Button style="fill" type="submit">
                        registrar
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default Create;

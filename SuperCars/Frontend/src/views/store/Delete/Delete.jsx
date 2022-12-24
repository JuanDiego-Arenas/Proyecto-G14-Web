import React, { useState } from 'react';
import Button from '../../../components/forms/Button/Button';
import Input from '../../../components/forms/Input/Input';
import { API_URL } from '../../../services/api';
import './Delete.css';
import '../../login/Login.css';

function Delete() {
    async function onSubmit(event) {
        event.preventDefault();

        const res = await fetch(API_URL + '/tienda/' + id, {
            method: 'DELETE',
        });

        if (res.ok) {
            const data = await res.json();
            alert(
                'se elimino la tienda ' +
                    data._id +
                    ' que esta ubicada en ' +
                    data.ciudad
            );
        } else {
            alert(res.status);
        }
    }

    const [id, setId] = useState('');

    return (
        <section className="login">
            <div className="container">
                <form
                    className="flex card form"
                    onSubmit={evento => onSubmit(evento)}
                >
                    <h1 className="title">Eliminar</h1>
                    <Input onChange={val => setId(val.target.value)}>
                        Codigo
                    </Input>
                    <Button style="fill" type="submit">
                        Eliminar
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default Delete;

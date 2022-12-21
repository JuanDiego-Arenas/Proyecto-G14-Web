import React, { useState } from 'react';
import Input from '../../components/forms/Input/Input';
import Button from '../../components/forms/Button/Button';
import './Delete.css';

function Delete() {
    async function onSubmit(event) {
        event.preventDefault();

        const res = await fetch('http://localhost:8090/tienda/' + id, {
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
        <section className="delete">
            <form className="formulario" onSubmit={evento => onSubmit(evento)}>
                <h1 className="title">Eliminar</h1>
                <Input onChange={val => setId(val.target.value)}>Codigo</Input>
                <Button style="fill" type="submit">
                    Eliminar
                </Button>
            </form>
        </section>
    );
}

export default Delete;

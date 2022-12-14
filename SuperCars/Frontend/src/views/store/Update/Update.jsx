import React, { useState } from 'react';
import Button from '../../../components/forms/Button/Button';
import Input from '../../../components/forms/Input/Input';
import GridColumn from '../../../components/GridColumn';
import { API_URL } from '../../../services/api';
import './Update.css';
import '../../login/Login.css';


function Update() {
    async function actualizar(evento) {
        evento.preventDefault();

        if (editar == false) {
            const res = await fetch(API_URL + '/tienda/' + id, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    sede: sede,
                    ciudad: ciudad,
                    direccion: direccion,
                },
            });
            if (res.ok) {
                alert('datos actualizados');
            } else {
                alert('no se puede actualizar datos');
            }
        } else {
            alert('debes buscar una tienda');
        }
    }

    async function consultar(evento) {
        evento.preventDefault();

        const res = await fetch(API_URL + '/tienda/' + id, {
            method: 'GET',
        });

        if (res.ok) {
            try {
                const data = await res.json();
                setSede(data.sede);
                setCiudad(data.ciudad);
                setdireccion(data.direccion);
                setEditar(false);
            } catch (error) {
                alert('tienda no registrada');
            }
        } else {
            alert('falta registrar datos');
        }
    }

    const [id, setId] = useState('');
    const [sede, setSede] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [direccion, setdireccion] = useState('');
    const [editar, setEditar] = useState(true);

    return (
        <section>
            <div className="login container grid">
                <GridColumn className="top">
                    <form
                        className="flex card form"
                        onSubmit={evento => consultar(evento)}
                    >
                        <h1 className="title">Consulta</h1>
                        <Input onChange={val => setId(val.target.value)}>
                            codigo
                        </Input>
                        <Button style="fill" type="submit">
                            Buscar
                        </Button>
                    </form>
                </GridColumn>
                <GridColumn className="top">
                    <form
                        className="flex card form"
                        onSubmit={evento => actualizar(evento)}
                    >
                        <h1 className="title">Tienda {id}</h1>
                        <Input
                            onChange={val => setSede(val.target.value)}
                            value={sede}
                            disable={editar}
                        >
                            Sede
                        </Input>
                        <Input
                            onChange={val => setCiudad(val.target.value)}
                            value={ciudad}
                            disable={editar}
                        >
                            Ciudad
                        </Input>
                        <Input
                            onChange={val => setdireccion(val.target.value)}
                            value={direccion}
                            disable={editar}
                        >
                            Direccion
                        </Input>
                        <Button style="fill" type="submit">
                            Actualizar
                        </Button>
                    </form>
                </GridColumn>
            </div>
        </section>
    );
}

export default Update;

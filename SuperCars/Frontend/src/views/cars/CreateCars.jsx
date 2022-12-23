import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/forms/Button/Button';
import Input from '../../components/forms/Input/Input';
import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';
import { API_URL } from '../../services/api';
//import "./Create.css"
import './Login.css';

function CreateCars() {
    const { setToken } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);

    const [placa, setPlaca] = useState('');
    const [propietario, setPropietario] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio_modelo, setAnio_modelo] = useState('');
    const [cant_puertas, setCant_puertas] = useState('');
    const [kilometraje, setKilometraje] = useState('');
    const [valor, setValor] = useState('');

    const navigate = useNavigate();

    async function registrarClick(event) {
        event.preventDefault();

        const res = await fetch(API_URL + '/cars', {
            method: 'POST',
            mode: 'cors',
            headers: {
                placa: placa,
                propietario: propietario,
                marca: marca,
                modelo: modelo,
                estado: 'Disponible',
                anio_modelo: anio_modelo,
                cant_puertas: cant_puertas,
                kilometraje: kilometraje,
                valor: valor,
            },
        });

        if (res.ok) {
            const data = await res.json();
            alert('se registro el carro ' + data._id);
            navigate('/cars');
        } else {
            alert(res.status);
        }
    }

    return (
        <section className="login">
            <div className="container">
                <form className=" flex card form">
                    <h1 className="title">Registrar Carros</h1>
                    <Input onChange={event => setPlaca(event.target.value)}>
                        placa
                    </Input>
                    <Input
                        onChange={event => setPropietario(event.target.value)}
                    >
                        propietario
                    </Input>
                    <Input onChange={event => setMarca(event.target.value)}>
                        marca
                    </Input>
                    <Input onChange={event => setModelo(event.target.value)}>
                        modelo
                    </Input>
                    <Input
                        onChange={event => setAnio_modelo(event.target.value)}
                    >
                        anio_modelo
                    </Input>
                    <Input
                        onChange={event => setCant_puertas(event.target.value)}
                    >
                        cant_puertas
                    </Input>
                    <Input
                        onChange={event => setKilometraje(event.target.value)}
                    >
                        kilometraje
                    </Input>
                    <Input onChange={event => setValor(event.target.value)}>
                        valor
                    </Input>
                    <Button onClick={registrarClick} style="fill">
                        registrar
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default CreateCars;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/forms/Button/Button';
import Input from '../../components/forms/Input/Input';
import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';
// import "./Create.css"
import './Login.css';

function DeleteCars() {
    const { setToken } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);

    const [placa, setPlaca] = useState('');

    const navigate = useNavigate();

    async function eliminarClick(event) {
        event.preventDefault();

        const res = await fetch('http://localhost:8080/cars/' + placa, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                placa: placa,
            },
        });

        if (res.ok) {
            const data = await res.json();
            alert('se elimino el carro ' + data._id);
            navigate('/cars');
        } else {
            alert(res.status);
        }
    }

    return (
        <section className="login">
            <div className="container">
                <form className=" card form">
                    <h1 className="title">Registrar Carros</h1>
                    <Input onChange={event => setPlaca(event.target.value)}>
                        placa
                    </Input>
                    <Button onClick={eliminarClick} style="fill">
                        Eliminar
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default DeleteCars;

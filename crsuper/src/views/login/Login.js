import React, { useState } from 'react';
import Logo from '../../assets/Logo';
import { Link } from 'react-router-dom';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import './Login.css';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function onButtonClick(evento) {
        evento.preventDefault();
        alert(
            'estas iniciando sesión.\nUser: ' + user + '\nPassword: ' + password
        );

        const res = await fetch('http://localhost:8080/login', {
            method: 'GET',
            mode: 'cors',
            headers: {
                user: user,
                password: password,
            },
        });

        if (res.ok) {
            const data = await res.json();
            alert('Tu token es: ' + data.token);
        } else {
            alert('Error: ' + res.statusText);
        }
    }

    return (
        <section className="login">
            <div className="container">
                <Link to="/">
                    <Logo showText={false} />
                </Link>

                <h1 className="title">
                    Iniciar Sesión en <b>SuperCars</b>
                </h1>

                <form className="flex card form">
                    <Input onChange={event => setUser(event.target.value)}>
                        User Name
                    </Input>
                    <Input
                        type="password"
                        onChange={event => setPassword(event.target.value)}>
                            Password
                    </Input>

                    <Button style='fill' onClick={onButtonClick}>Login</Button>
                </form>
                <div className="register card">
                    <p>
                        ¿Nuevo en SuperCars?{' '}
                        <Link to="/register">Crea una cuenta aquí</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;

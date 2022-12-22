import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button/Button';
import Input from '../../components/forms/Input/Input';
import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';
import { login } from '../../services/AuthService';

import './Login.css';

function Login() {
    const { setToken } = useContext(TokenContext);
    const { setUserName } = useContext(UserContext);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();

    // async function onButtonClick(event) {
    //     event.preventDefault();
    //     const token = await login(user, password);

    //     if (token) {
    //         setToken(token);
    //         setUserName({ setUser });
    //         navigate('/home');
    //     } else {
    //         alert('Credenciales Incorrectas');
    //     }

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
                <p>¡Que gusto verte nuevamente!</p>
                <form className="flex card form">
                    <Input onChange={event => setUser(event.target.value)}>
                        Usuario
                    </Input>
                    <Input
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                    >
                        Contraseña
                    </Input>

                    <Button onClick={onButtonClick} style={"fill"}>
                        Iniciar Sesión
                    </Button>
                </form>
                <div className="register card">
                    <p>
                        ¿Nuevo en SuperCars?{' '}
                        <Link className='link' to="/register">Crear una cuenta</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;

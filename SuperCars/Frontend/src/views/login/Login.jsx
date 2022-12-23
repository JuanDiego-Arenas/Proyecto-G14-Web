import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/AuthService';
import { useCookies } from 'react-cookie';

// Complementos
import Input from '../../components/forms/Input/Input';
import Button from '../../components/forms/Button/Button';
import Logo from '../../assets/Logo';
import './Login.css';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies] = useCookies(['token']);

    // Si hay un token, navega a cars (Pagina Principal)
    useEffect(() => {
        if (cookies.token) navigate('/cars');
    }, []);

    const navigate = useNavigate();

    function onButtonClick(event) {
        event.preventDefault();

        login(user, password).then(token => {
            // Implementación
            if (!token) return;

            // Guardado de la cookie en el token
            setCookies('token', token, { maxAge: 7 * 24 * 60 * 60 });

            // Navegación a cars
            navigate('/cars');
        });
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
                    <Input
                        type="text"
                        onChange={event => setUser(event.target.value)}
                    >
                        User Name
                    </Input>

                    <Input
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                    >
                        Password
                    </Input>

                    <Button type="submit" style="fill" onClick={onButtonClick}>
                        Login
                    </Button>
                </form>
                <div className="register card">
                    <p>
                        ¿Nuevo en SuperCars?{' '}
                        <Link className="link" to="/register">
                            Crea una cuenta aquí
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;

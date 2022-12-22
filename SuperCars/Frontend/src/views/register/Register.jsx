import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button/Button';
import Input from '../../components/forms/Input/Input';
// import { register } from '../../services/AuthService';

import './Register.css';

function Login() {
    return (
        <section className="login">
            <div className="container">
                <Link to="/">
                    <Logo showText={false} />
                </Link>
                <h1 className="title">
                    Registrarse en <b>Suepr Cars</b>
                </h1>
                <form className="flex card form">
                    <Input>Telefono</Input>
                    <Input>Nombre De Usuario</Input>
                    <Input type="password">Contraseña</Input>
                    <Input type="password">Confirmar Contraseña</Input>
                    <Button style={"fill"}>Registrarme</Button>
                </form>
                <div className="register card">
                    <p>
                        ¿Ya tienes cuenta?{' '}
                        <Link className='link' to="/login">Inicia Sesión</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;

import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button/Button';
import Input from '../../components/forms/Input/Input';
import { register } from '../../services/AuthService';

import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [idType, setIdType] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function onButtonClick(event) {
        event.preventDefault();

        register(user, password).then(token => {
            // Implementación
            if (!token) return;

            // Guardado de la cookie en el token
            setCookies('token', token, { maxAge: 7 * 24 * 60 * 60 });

            // Navegación a cars
            navigate('/cars');
        });

        const res = await register(user, password);
        console.log(res);
    }

    return (
        <section className="login">
            <div className="container">
                <Link to="/">
                    <Logo style="200px" showText={false} />
                </Link>
                <h1 className="title">
                    Registrarse en <b>SuperCars</b>
                </h1>
                <form className="flex card form">
                    <Input type="text" onChange={e => setName(e.target.value)}>
                        Nombre
                    </Input>
                    <Input
                        type="text"
                        onChange={e => setLastName(e.target.value)}
                    >
                        Apellido
                    </Input>
                    <Input
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    >
                        Email
                    </Input>
                    <Input
                        type="text"
                        onChange={e => setIdType(e.target.value)}
                    >
                        Tipo De Documento
                    </Input>
                    <Input
                        type="number"
                        onChange={e => setIdNumber(e.target.value)}
                    >
                        Número De Documento
                    </Input>
                    <Input type="user" onChange={e => setUser(e.target.value)}>
                        Nombre De Usuario
                    </Input>
                    <Input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    >
                        Contraseña
                    </Input>
                    <Input type="password">Confirmar Contraseña</Input>
                    <Button style={'fill'} onClick={onButtonClick}>
                        Registrarme
                    </Button>
                </form>
                <div className="register card">
                    <p>
                        ¿Ya tienes cuenta?{' '}
                        <Link className="link" to="/login">
                            Inicia Sesión
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Register;

import React, { useState } from 'react';
import Button from '../components/forms/Button';
import Flex from '../components/utils/Flex';
import Input from '../components/forms/Input';
import Gap from '../components/utils/Gap';

function Login() {
    async function onSubmit(evento) {
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

    const [user, setUser] = useState('');
    function onUserChange(e) {
        setUser(e.target.value);
    }

    const [password, setPassword] = useState('');
    function onPasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <section>
            <form onSubmit={evento => onSubmit(evento)}>
                <Flex padding="2rem" borderRadius="10px">
                    <div>
                        <label>User Name</label>
                        <Gap>2rem</Gap>
                        <Input onChange={e => onUserChange(e)}></Input>
                        <Gap direction="vertical">1rem</Gap>
                    </div>

                    <div>
                        <label>Password</label>
                        <Gap>1rem</Gap>
                        <Input
                            type="password"
                            onChange={e => onPasswordChange(e)}
                        ></Input>
                    </div>

                    <Gap direction="vertical">2rem</Gap>
                    <Button type="submit">Login</Button>
                </Flex>
            </form>
            <div></div>
        </section>
    );
}

export default Login;

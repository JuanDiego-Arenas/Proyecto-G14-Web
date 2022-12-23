import { API_URL } from './api';

export async function register(
    name,
    lastName,
    email,
    idType,
    idNumber,
    user,
    password
) {
    const data = {
        user: {
            name,
            lastName,
            email,
            idType,
            idNumber,
            user,
            password,
        },
    };

    const res = await fetch(API_URL + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (res.ok) {
        alert('Registro exitoso');
    } else {
        alert('Hubo un fallo en el registro');
    }
}

export async function login(user, password) {
    const res = await fetch(API_URL + '/login', {
        mode: 'cors',
        headers: {
            user: user,
            password: password,
        },
    });

    const document = await res.json();

    if (res.ok) {
        return document.token;
    } else {
        console.log(document.message);
        alert('no autorizado');
        return null;
    }
}

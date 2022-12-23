import { API_URL } from './api';

export async function CarsService(token) {
    const res = await fetch(API_URL + '/cars', {
        headers: {
            token: token,
        },
    });
    const documents = await res.json();
    return documents;
}

export async function DeleteCarService(placa) {
    const res = await fetch(API_URL + '/cars/' + placa, {
        method: 'DELETE',
    });

    return res;
}

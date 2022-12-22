import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './CarsPanel.css';
import Button from '../../components/forms/Button/Button';
import { DeleteCarService } from '../../services/CarsService';

function My_cars(props) {
    const { user } = useContext(UserContext);

    const { data } = props;
    console.log(useContext(UserContext));
    //console.log(data);
    const { modelo, marca, valor, kilometraje, createdAt, estado, placa } =
        data;

    const navigate = useNavigate();
    //const [CarData, setCarData] = useState("");

    async function Eliminar_carro(event) {
        event.preventDefault();

        //setCarData({ placa: userName });
        navigate('/cars');
    }

    if (user.name == data.propietario) {
        return (
            <div className="car grid">
                <p className="from">Placa:{placa}</p>
                <p></p>
                <p className="from">Marca:{marca}</p>
                <p></p>
                <p className="from">Modelo:{modelo}</p>
                <p></p>
                <p className="from">Kilometraje:{kilometraje}</p>
                <p></p>
                <p className="estado_good">Estado: {estado}</p>
                <p className="negative-value">Valor:$ {valor}</p>
                <p className="date">
                    fecha a la venta:{createdAt.substr(0, 10)}
                </p>
            </div>
        );
    }
}

export default My_cars;

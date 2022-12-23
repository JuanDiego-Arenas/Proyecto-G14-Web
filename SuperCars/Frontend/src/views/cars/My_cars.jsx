import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './CarsPanel.css';
import Button from '../../components/forms/Button/Button';
import { DeleteCarService } from '../../services/CarsService';

function My_cars(props) {
    const { data } = props;
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

    const date = createdAt;

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
            <p className="date">fecha a la venta:{date}</p>
        </div>
    );
}

export default My_cars;

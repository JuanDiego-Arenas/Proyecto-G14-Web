import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import List_cars from './List_cars';
import My_cars from './My_cars';
import TokenContext from '../../contexts/TokenContext';
import { getTransactions } from '../../services/TransactionService';
import { CarsService } from '../../services/CarsService';
//import Transaction from "./Transaction";

import './CarsPanel.css';

function CarsPanel() {
    // const { token } = useContext(TokenContext);

    const navigate = useNavigate();
    const [documents, setDocuments] = useState([]);
    const [cookies, setCookies] = useCookies(['token']);

    useEffect(() => {
        if (!cookies.token) {
            return navigate('/login');
        }

        async function fetchData() {
            const documents = await CarsService(cookies.token);
            setDocuments(documents);
            console.log(documents);
        }

        fetchData();
    }, []);

    return (
        <section className="user-panel">
            <div className="container">
                <h1>Mis Carros</h1>

                <div className="cars card">
                    {documents.map(document => (
                        <My_cars data={document} key={document._id} />
                    ))}
                </div>
            </div>

            <div className="container">
                <h1>Lista de Carros</h1>

                <div className="cars card">
                    {documents.map(document => (
                        <List_cars data={document} key={document._id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CarsPanel;

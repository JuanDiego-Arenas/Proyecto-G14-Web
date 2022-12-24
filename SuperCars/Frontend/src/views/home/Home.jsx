import React from 'react';
import Button from '../../components/forms/Button/Button';
import illustration from './home_illustration.png';
import { Link } from 'react-router-dom';
import GridColumn from '../../components/GridColumn';

import './Home.css';

function Home() {
    return (
        <section className="header">
            <div className="grid container">
                <GridColumn className="headline" column="1 / span 2">
                    <div className="main-headline">
                        <p className="title">Los mejores carros</p>
                        <p className="content">ALQUILER Y VENTA</p>
                    </div>
                    <p className="supp-headline">
                        Alquilar o comprar tu carro nunca había sido tan fácil
                        como en <b>SuperCars</b>.
                    </p>
                    <Link to="/register">
                        <Button style="fill">Quero Mi Cuenta</Button>
                    </Link>
                </GridColumn>

                <GridColumn className="illustration" column="span 3">
                    <img src={illustration}></img>
                </GridColumn>
            </div>
        </section>
    );
}

export default Home;

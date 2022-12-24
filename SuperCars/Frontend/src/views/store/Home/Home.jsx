import React from 'react';
import Button from '../../../components/forms/Button/Button';
import GridColumn from '../../../components/GridColumn';
import { Link } from 'react-router-dom';
import imagenInicio from './imagenInicio.png';
import './Home.css';

function Home() {
    return (
        <section className="Home">
            <div className="container grid">
                <GridColumn className="headLine">
                    <h1>administración de tiendas</h1>
                    <Link to="/updatestore">
                        <Button style="wire">administrar</Button>
                    </Link>
                </GridColumn>
                <GridColumn className="imagenInicio">
                    <img src={imagenInicio}></img>
                </GridColumn>
            </div>
        </section>
    );
}

export default Home;

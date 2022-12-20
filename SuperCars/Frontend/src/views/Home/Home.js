import React from 'react';
import Boton from '../../components/forms/Boton/Boton';
import GridColumn from '../../components/utils/GridColumn';
import { Link } from 'react-router-dom';
import "./Home.css"
import imagenInicio from "./imagenInicio.png"

function Home() {
    return ( 
        <section className='Home'>
            <div className='container grid'>
                <GridColumn className="headLine">
                    <h1>admimnistracion de tiendas</h1>
                    <Link to='/Update'><Boton style="wire">administrar</Boton></Link>
                </GridColumn>
                <GridColumn className='imagenInicio'>
                    <img src={imagenInicio}></img>
                </GridColumn>
            </div>
        </section>
     );
}

export default Home;
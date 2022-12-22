import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../forms/Button/Button';

import './Navbar.css';

function NavCars() {
    return (
        <>
            <nav className="navbar">
                <ul className="menu flex container">
                    <li>
                        <Link to="/">
                            <Logo size="14px" showText={true} />
                        </Link>{' '}
                    </li>
                    {/* <li><Link to="/">Inicio</Link></li> */}
                    {/* <li><Link to="/about">Nosotros</Link></li> */}
                    <li>
                        <Link to="/createcars">
                            <Button style="wire">Crear Carros</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/deletecars">
                            <Button style="wire">Borrar Carros</Button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet></Outlet>
        </>
    );
}

export default NavCars;

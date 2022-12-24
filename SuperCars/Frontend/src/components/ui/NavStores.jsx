import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logo from '../../assets/Logo';
import Button from '../forms/Button/Button';

import './Navbar.css';

function Nav() {
    return (
        <nav className="navbar">
            <ul className="menu container flex">
                <li>
                    <Link to="/cars">
                        <Logo size="190px" showText={true} />
                    </Link>{' '}
                </li>
                <li>
                    <Link to="/createstore">
                        <Button style="wire">Crear Store</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/updatestore">
                        <Button style="wire">Actualizar Store</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/deletestore">
                        <Button style="wire">Eliminar Store</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/cars">
                        <Button style="wire">Inicio</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

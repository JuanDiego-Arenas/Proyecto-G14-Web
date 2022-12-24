import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logo from '../../assets/Logo';
import Button from '../forms/Button/Button';

import './Navbar.css';

function NavCars() {
    const navigate = useNavigate();

    const [cookies, setCookies, removeCookie] = useCookies(['token']);

    function signOff(event) {
        event.preventDefault();
        removeCookie('token');
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar">
                <ul className="menu flex container">
                    <li>
                        <Link to="/cars">
                            <Logo size="190px" showText={true} />
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
                    <li>
                        <Link to="/store">
                            <Button style="wire">Tiendas</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <Button style="wire" onClick={signOff}>
                                Cerrar sesión
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet></Outlet>
        </>
    );
}

export default NavCars;

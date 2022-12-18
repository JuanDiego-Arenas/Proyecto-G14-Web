import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/global.css';
import Navbar from './components/ui/Navbar';
import { TokenProvider } from './contexts/TokenContext';
import { UserProvider } from './contexts/UserContext';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Store from './views/store/Store';
import Register from './views/register/Register';

// background-color: rgb(17, 24, 39);

function App() {
    return (
        <Routes>
            <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route
                    path="/about"
                    element={<h1 className="container">About</h1>}
                />
            </Route>

            <Route
                path="/login"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <Login />
                        </UserProvider>
                    </TokenProvider>
                }
            />
            <Route
                path="/register"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <Register />
                        </UserProvider>
                    </TokenProvider>
                }
            />
            <Route
                path="/store"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <Store />
                        </UserProvider>
                    </TokenProvider>
                }
            />

        </Routes>
    );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './assets/global.css';
import Navbar from './components/ui/Navbar';
import NavCars from './components/ui/NavCars';
import { TokenProvider } from './contexts/TokenContext';
import { UserProvider } from './contexts/UserContext';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Register from './views/register/Register';
import CarsPanel from './views/cars/CarsPanel';
// import InvoicePanel from './views/invoices/InvoicePanel';
import CreateCars from './views/cars/CreateCars';
import DeleteCars from './views/cars/DeleteCars';
import Test from './views/test/Test';

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
            {/* <Route
                path="/panel"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <UserPanel />
                        </UserProvider>
                    </TokenProvider>
                }
            /> */}
            <Route
                path="/cars"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <NavCars />
                            <CarsPanel />
                        </UserProvider>
                    </TokenProvider>
                }
            />
            <Route
                path="/createcars"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <Navbar />
                            <CreateCars />
                        </UserProvider>
                    </TokenProvider>
                }
            />
            <Route
                path="/deletecars"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <Navbar />
                            <DeleteCars />
                        </UserProvider>
                    </TokenProvider>
                }
            />

            <Route path="/test" element={<Test></Test>} />
        </Routes>
    );
}

export default App;

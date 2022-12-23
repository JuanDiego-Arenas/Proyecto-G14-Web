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
import InvoicePanel from './views/invoices/InvoicePanel';
import CreateCars from './views/cars/CreateCars';
import DeleteCars from './views/cars/DeleteCars';

function App() {
    return (
        <Routes>
            <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
                path="/invoice"
                element={
                    <TokenProvider>
                        <UserProvider>
                            <NavCars />
                            <InvoicePanel />
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
        </Routes>
    );
}

export default App;

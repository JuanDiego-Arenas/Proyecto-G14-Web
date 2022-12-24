import { Route, Routes } from 'react-router-dom';
import { TokenProvider } from './contexts/TokenContext';
import { UserProvider } from './contexts/UserContext';
import './assets/global.css';

// Nav's
import Navbar from './components/ui/Navbar';
import NavCars from './components/ui/NavCars';
import NavStores from './components/ui/NavStores';

// Cars
import Home from './views/home/Home';
import Login from './views/login/Login';
import Register from './views/register/Register';
import CarsPanel from './views/cars/CarsPanel';
import InvoicePanel from './views/invoices/InvoicePanel';
import CreateCars from './views/cars/CreateCars';
import DeleteCars from './views/cars/DeleteCars';

// Stores
import HomeStore from './views/store/Home/Home';
import CreateStore from './views/store/Create/Create';
import DeleteStore from './views/store/Delete/Delete';
import UpdateStore from './views/store/Update/Update';

function App() {
    return (
        <Routes>
            <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Conexiones de Cars */}
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

            {/* Conexiones de la Store */}
            <Route
                path="/store"
                element={
                    <>
                        <NavStores />
                        <HomeStore />
                    </>
                }
            />
            <Route
                path="/createstore"
                element={
                    <>
                        <NavStores />
                        <CreateStore />
                    </>
                }
            />
            <Route
                path="/deletestore"
                element={
                    <>
                        <NavStores />
                        <DeleteStore />
                    </>
                }
            />
            <Route
                path="/Updatestore"
                element={
                    <>
                        <NavStores />
                        <UpdateStore />
                    </>
                }
            />
        </Routes>
    );
}

export default App;

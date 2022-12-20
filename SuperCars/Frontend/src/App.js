import React from 'react';
import {Route, Routes} from "react-router-dom";
//menu
import Nav from './components/Menu/Nav';
import  "./assets/global.css"
//para hacer las rutas
import Home from './views/Home/Home';
import Create from './views/Create/Create';
import Update from './views/Update/Update';
import Delete from './views/Delete/Delete';


function App() {
    return ( 
        <div>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/Create' element={<Create></Create>}></Route>
                <Route path='/Update' element={<Update></Update>}></Route>
                <Route path='/Delete' element={<Delete></Delete>}></Route>
            </Routes>
        </div>
     );
}

export default App;
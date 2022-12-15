import React, { useState } from "react";
import "./assets/global.css";
import Button from "./components/forms/Button";

import Login from "./views/Login";

// background-color: rgb(17, 24, 39);

function App() {
    const [contador, setContador] = useState(0);

    function increment() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <div className="principal">
            <h1>CrSuperCars</h1>
            <Login></Login>
            <p>contador: {contador}</p>
            <Button onClick={increment}>Incrementar contador</Button>
        </div>
    );
}

export default App;

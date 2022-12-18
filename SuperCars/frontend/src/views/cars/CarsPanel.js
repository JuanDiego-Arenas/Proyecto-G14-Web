import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { getTransactions } from "../../services/TransactionService";
//import Transaction from "./Transaction";

import "./CarsPanel.css";

function CarsPanel() {
  function CarsPanel() {
    const { token } = useContext(TokenContext);

    const navigate = useNavigate();
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
      if (!token) {
        return navigate("/login");
      }

      async function fetchData() {
        const documents = await getTransactions(token);
        setDocuments(documents);
      }

      fetchData();
    }, []);

    return;
    <section className="cars-panel">
      <div className="container">
        <h1>Vehiculos Disponibles</h1>
      </div>
    </section>;
  }
}

export default CarsPanel;

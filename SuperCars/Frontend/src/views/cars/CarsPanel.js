import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
// import { getTransactions } from "../../services/TransactionService";
import { CarsService } from "../../services/CarsService";
import List_cars from "./List_cars";
import My_cars from "./My_cars";
//import Transaction from "./Transaction";

import "./CarsPanel.css";

function CarsPanel() {
  const { token } = useContext(TokenContext);

  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

    async function fetchData() {
      const documents = await CarsService(token);
      setDocuments(documents);
    }

    fetchData();
  }, []);

  return (
    <section className="user-panel">
      <div className="container">
        <h1>Mis Carros</h1>

        <div className="cars card">
          {documents.map((document) => (
            <My_cars data={document} key={document._id} />
          ))}
        </div>
      </div>

      <div className="container">
        <h1>Lista de Carros</h1>

        <div className="cars card">
          {documents.map((document) => (
            <List_cars data={document} key={document._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarsPanel;

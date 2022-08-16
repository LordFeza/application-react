// Bibliothèques qui permettent de créer des composants pour applications web ou mobile
import React from "react";
import ReactDOM from "react-dom/client";
// Import des feuilles de style
import "./css/style.css";
// Importation composants nouvellement créés (le nom de la fonction correspond au nom du composant)
import Hello from "./components/hello/Hello";
import Persons from "./components/person/Persons";
import Films from "./components/film/Films";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* On appelle notre composant (JSX) principal. Ce qui suit sera affiché dans le navigateur */}
    <Hello />
    <Persons />
    <Films />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega-sena/Mega";

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#11 Mega" color="#854442">
        <Mega qtdNumero={7}></Mega>
      </Card>
      <Card titulo="#10 Contador" color="#ffcc5c">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#09 Input" color="#7bc043">
        <Input></Input>
      </Card>
      <Card titulo="#08 Comunicaçao Indireta" color="#a8e6cf">
        <Super></Super>
      </Card>
      <Card titulo="#07 Comunicaçao Direta" color="#ee4035">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#6-Condicional v2" color="#fe8a71">
        <CondicionalComIf numero={11} />
      </Card>
      <Card titulo="#05-Condicional v1" color="#f6cd61">
        <Condicional numero={11} />
      </Card>
      <Card titulo="#04-Repetição" color="35a79c">
        <Repeticao />
      </Card>
      <Card titulo="#03-Componente com Filhos" color="#3da4ab">
        <ComFilhos>
          <ul>
            <li>Lucas</li>
            <li>Marcio</li>
            <li>Ricardo</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02-Componente com Parametro" color="#feb2a8">
        <ComParametro titulo="Esse é o título" subtitulo="esse é o subtítulo" />
      </Card>
      <Card titulo="#01-Primeiro Componente" color="#0e9aa7">
        <Primeiro />
      </Card>
    </div>
  </div>
);

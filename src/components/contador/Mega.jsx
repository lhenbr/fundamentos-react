/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0));

  function gerarNumerosNaoContidos(array) {
    const novoNumero = parseInt(Math.random() * (60 - 1)) + 1;
    return array.includes(novoNumero)
      ? gerarNumerosNaoContidos(array)
      : novoNumero;
  }
  function gerarNumeros() {
    const novoArray = Array(props.qtdNumero)
      .fill(0)
      .reduce((a, e) => {
        const novoNumero = gerarNumerosNaoContidos(a);
        return [...a, novoNumero];
      }, [])
      .sort((a, b) => a - b);
    setNumeros(novoArray);
  }

  return (
    <div>
      <h3>Mega</h3>
      <h4>{numeros.join(" ")}</h4>
      <button onClick={gerarNumeros}>Gerar Número</button>
    </div>
  );
};

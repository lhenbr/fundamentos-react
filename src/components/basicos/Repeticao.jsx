/* eslint-disable no-unused-vars */
import React from "react";
import produtos from "../../data/products.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  function getProdutos() {
    return produtos.map((p) => {
      return (
        <li key={p.id}>
          {p.id} - {p.nome} - R$ {p.preco}
        </li>
      );
    });
  }
  return (
    <div>
      <h2>Repetição</h2>
      <ul>{getProdutos()}</ul>
    </div>
  );
};

import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  function acao(e) {
    props.onClicar(Math.random(), "Gerado");
  }

  return (
    <div>
      <button onClick={acao}>Alterar</button>
    </div>
  );
};

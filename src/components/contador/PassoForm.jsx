/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="passoInput">Passo:</label>
      <input
        id="passoinput"
        type="number"
        value={props.passo}
        onChange={(e) => props.onPassoChange(+e.target.value)}
      />
    </div>
  );
};

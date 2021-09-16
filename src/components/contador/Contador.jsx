import React from "react";
import Botoes from "./Botoes";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";

export default class Contador extends React.Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  };

  inc = () => {
    this.setState({ valor: this.state.valor + this.state.passo });
  };
  dec = () => {
    this.setState({ valor: this.state.valor - this.state.passo });
  };
  onPassoChange = (value) => {
    this.setState({ passo: value });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <PassoForm
          onPassoChange={this.onPassoChange}
          passo={this.state.passo}
        ></PassoForm>
        <Display valor={this.state.valor}></Display>

        <Botoes inc={this.inc} dec={this.dec}></Botoes>
      </div>
    );
  }
}

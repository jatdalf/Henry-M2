import React from "react";

export default class Botones extends React.Component {
  render() {
    // console.log(React);
    // console.log(this.props);
    const alerta = this.props.alerts;
    // console.log(alerta);
    return (
      <div>
        <button
          onClick={() => {
            alert(alerta.m1);
          }}
        >
          Módulo 1
        </button>
        <button
          onClick={() => {
            alert(alerta.m2);
          }}
        >
          Módulo 2
        </button>
      </div>
    );
  }
}

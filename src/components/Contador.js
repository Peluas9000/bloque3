import React, { Component } from 'react';

export default class Contador extends Component {
    numero = 1;

    incrementarNumero = () => {
        this.numero += 1;
        console.log('Número: ' + this.numero);
    };

    state = {
        valor: parseInt(this.props.inicio, 10)
    };

    incrementarValor = () => {
        this.setState((estadoAnterior) => ({
            valor: estadoAnterior.valor + 1
        }));
    };

    render() {
        return (
            <div>
                <h1>Contador JSX: {this.props.inicio}</h1>
                <h3 style={{ color: 'red' }}>Valor: {this.state.valor}</h3>
                <button onClick={this.incrementarValor}>
                    Incrementar valor
                </button>
                <button onClick={this.incrementarNumero}>
                    Incrementar número
                </button>
                <button onClick={() => this.incrementarNumero()}>
                    Incrementar lambda
                </button>
            </div>
        );
    }
}

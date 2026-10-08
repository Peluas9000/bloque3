import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class EmpleadosComponent extends Component {
    state = {
        empleados: []
    };

    // 1. Método genérico para llamar al API con la prop actual
    cargarEmpleados = () => {
        let request = "api/Empleados/EmpleadosDepartamento/" + this.props.iddepartamento;
        axios.get(Global.urlApiEmpleados + request).then(response => {
            this.setState({ empleados: response.data });
        });
    }

    // 2. Ciclo de vida: Se ejecuta la primera vez que el Padre dibuja al Hijo
    componentDidMount() {
        this.cargarEmpleados();
    }

    // 3. Ciclo de vida: Se ejecuta cuando el Padre cambia de opción y manda un nuevo prop
    componentDidUpdate(prevProps) {
        // REGLA DE ORO: Si no ponemos el IF, al hacer setState entraremos en bucle infinito
        if (this.props.iddepartamento !== prevProps.iddepartamento) {
            this.cargarEmpleados();
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#f0f0f0", padding: "15px" }}>
                <h3 style={{ color: "blue" }}>
                    Empleados del Dept: {this.props.iddepartamento}
                </h3>
                <ul>
                    {
                        this.state.empleados.map((emp, index) => {
                            return <li key={index}>
                                <strong>{emp.apellido}</strong> - {emp.oficio}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import EmpleadosComponent from './EmpleadosComponent';

export default class DepartamentosComponent extends Component {
    // 1. Referencia para capturar el <select>
    cajaSelect = React.createRef();

    // 2. Estado reactivo: lista de departamentos y el ID elegido
    state = {
        departamentos: [],
        idDeptSeleccionado: null
    };

    // 3. Al nacer, cargamos los departamentos para el desplegable
    componentDidMount() {
        let request = "api/departamentos";
        axios.get(Global.urlApiDepartamentos + request).then(response => {
            this.setState({ departamentos: response.data });
        });
    }

    // 4. Método del formulario: capturamos el ID y lo metemos en el state
    buscarEmpleados = (e) => {
        e.preventDefault();
        this.setState({
            idDeptSeleccionado: this.cajaSelect.current.value
        });
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Maestro: Departamentos</h2>
                <form onSubmit={this.buscarEmpleados}>
                    <label>Seleccione un Departamento: </label>
                    <select ref={this.cajaSelect}>
                        {
                            this.state.departamentos.map((dept, index) => {
                                // El value es el ID numérico (clave para la BD), el texto es el nombre
                                return <option key={index} value={dept.Numero}>
                                    {dept.Nombre}
                                </option>
                            })
                        }
                    </select>
                    <button style={{ marginLeft: "10px" }}>Ver Empleados</button>
                </form>
                <hr />

                {/* 5. Si hay un ID seleccionado en el state, invocamos al hijo pasándole la prop */}
                {
                    this.state.idDeptSeleccionado && 
                    <EmpleadosComponent iddepartamento={this.state.idDeptSeleccionado} />
                }
            </div>
        )
    }
}
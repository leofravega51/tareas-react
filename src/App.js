import React, {Component} from 'react';
import './bootstrap.min.css'

import Header from './component/Header'
import NuevaTarea from './component/NuevaTarea';
import ListaTareas from './component/ListaTareas';


class App extends Component  {


  state = {
    tareas : []
  }

  //Cuando la aplicacion se carga
  componentDidMount(){
    const tareasLs = localStorage.getItem('citas')
    if(tareasLs){
      this.setState({
        tareas: JSON.parse(tareasLs)
      })
    }
  }

  //Cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearNuevaCita = datos => {
    //console.log(datos);
    //copiar el state actual
    const citas = [...this.state.citas, datos]

    // agregar el nuevo state
    this.setState({
      citas
    })
    
  }

  //elimina las citas del state
  eliminarCita = id =>{
    const citasActuales = [...this.state.citas]
    const citas = citasActuales.filter(cita => cita.id !== id)
    this.setState({
      citas
    })
    
  }

  render() {

    return (

      <div className="container">

        <Header 
          titulo="Administrador  de Pacientes Veterinaria"
        />
        <NuevaCita
        crearNuevaCita={this.crearNuevaCita}
        />

        <ListaCitas
          citas = {this.state.citas}
          eliminarCita = {this.eliminarCita}
         />

      </div>
        
    );
  }
 

}

export default App;

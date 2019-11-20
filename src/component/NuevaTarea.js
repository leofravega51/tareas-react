import React ,{Component} from 'react'
import uuid from 'uuid';

const stateInicial = {

    tarea: {
        tipo: '',
        proyecto: '',
        fecha: '',
        hora:'',
        nombre:'',
        apellido:'',
        tipo_desarrollador: ''
    },
    error: false
 }




class NuevaTarea extends Component {
    
    state = {...stateInicial}

       
     handleChange = e => {
        // colocar lo que el usuario escribe en el state
        this.setState({
            tarea : {
                ...this.state.tarea,
                [e.target.name] : e.target.value
            }
        })
   
     }
        // cuando el usuario envia el formulario
        handleSubmit = e => {
            e.preventDefault();

        //extraer los valores del state
        const { tipo, proyecto, fecha, hora, nombre, apellido, tipo_desarrollador } = this.state.tarea

           //validar que todos los campos esten llenos
           if(tipo === '' || proyecto === '' || fecha === ''|| hora === ''|| nombre === '' || apellido === '' || tipo_desarrollador === '' )
           {
                this.setState({
                    error: true
                })

                // detener la ejecucion
                return;
           }

           // generar objeto cons los datos
           const nuevaTarea = {...this.state.tarea};
           nuevaTarea.id = uuid();


              // agragar la cita al state de App
              this.props.crearNuevaTarea(nuevaTarea)

              //colocar en el state el stateInicial
              this.setState({
                  ...stateInicial
              })

        }

    render() { 

        /// extrar valor del state
        const {error} = this.state;
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llene el formulario para asignar una nueva tarea
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}

                <form
                onSubmit={this.handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Tipo</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Tipo de tarea"
                                name="tipo"
                                onChange={this.handleChange}
                                value={this.state.tarea.tipo}
                                />
                            </div>

                    </div>
            

               
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Proyecto</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Proyecto al que corresponde"
                                name="proyecto"
                                onChange={this.handleChange}
                                value={this.state.tarea.proyecto}
                                />
                            </div>

                    </div>
                {/*form-group */} 

                
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                           Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                type="date"
                                className="form-control"
                                 name="fecha"
                                 onChange={this.handleChange}
                                 value={this.state.tarea.fecha}
                                />
                            </div>
                    </div>
                 {/*form-group */} 


                 <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                           Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                type="time"
                                className="form-control"
                                 name="hora"
                                 onChange={this.handleChange}
                                 value={this.state.tarea.hora}
                                />
                            </div>
                    </div>
                 {/*form-group */} 

             
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Nombre</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Nombre del desarrollador"
                                name="nombre"
                                onChange={this.handleChange}
                                value={this.state.tarea.nombre}
                                />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Apellido</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Apellido del desarrollador"
                                name="apellido"
                                onChange={this.handleChange}
                                value={this.state.tarea.apellido}
                                />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Orientacion</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Tipo de desarrollador"
                                name="tipo_desarrollador"
                                onChange={this.handleChange}
                                value={this.state.tarea.tipo_desarrollador}
                                />
                            </div>
                    </div>

                    <input
                    type="submit"
                    className="py-3 mt-2 btn btn-success btn-block"
                    value="Agregar nueva tarea"
                    />
                </form>  {/*form-group */} 
                


                </div>
            </div>
         );
    }
}
 
export default NuevaTarea;
import React from 'react';

const Tarea = ({tarea, eliminarTarea}) => (

    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{tarea.tipo}</h3>
            <p className="card-text">
            <span>Desarrollador encargado</span> {tarea.nombre}</p>
           <p><span>Fecha</span> {tarea.fecha}</p>
          <p><span>Hora</span> {tarea.hora}</p>
          <p><span></span> {tarea.sintomas}</p>

          <button className="btn btn-danger" onClick={ ()=> eliminarTarea(tarea.id) }>
            Borrar &times;
          </button>
        </div>

    </div>
)

export default Tarea;
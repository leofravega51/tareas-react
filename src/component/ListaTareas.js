import React from 'react';
import Tarea from './Tarea'

const ListaTareas = ({ tareas, eliminarTarea }) => (
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">
                Administre aqui las tareas
            </h2>
            <div className="lista-tareas">
                {tareas.map(tarea => (
                    <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    eliminarTarea={eliminarTarea}
                    />
                ))}

            </div>
        </div>

    </div>
)

export default ListaTareas;
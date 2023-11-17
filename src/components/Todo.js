import React from 'react';

const Todo = ({ data, todoDelete, todoCompleted, setTodoEdit }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-text">{data.description}</p>
        <hr />
        <button
          onClick={() => setTodoEdit(data)}
          className="btn btn-sm btn-primary me-2"
        >
          Editar
        </button>

        <button
          onClick={() => todoDelete(data.id)}
          className="btn btn-sm btn-danger me-2"
        >
          Eliminar
        </button>

        <button
          onClick={() => todoCompleted(data.id)}
          className={`btn btn-sm ${
            data.completed ? 'btn-success' : 'btn-outline-warning'
          }`}
        >
          {data.completed ? 'Terminado' : 'Terminar'}
        </button>
      </div>
    </div>
  );
};

export default Todo;

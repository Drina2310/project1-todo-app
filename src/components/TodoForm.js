import React, { useEffect, useState } from 'react';

const initialFormValues = {
  title: '',
  description: '',
};

export const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues; //desestructuracion para acceder facil al objeto initialForms

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evita q se recargue la pag cada vez q se le de click al boton del form
    //el metodo trim elimina los espacios en blanco
    if (title.trim() === '') {
      setError('Debes indicar un titulo');
      return;
    }
    if (description.trim() === '') {
      setError('Debes indicar una descripción');
      return;
    }

    if (todoEdit) {
      //Updating
      todoUpdate(formValues);
      setSuccessMessage('task edited successfully');
    } else {
      //Add task
      todoAdd(formValues);
      setFormValues(initialFormValues);
      setSuccessMessage('task added successfully');
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);

    setError(null);
  };

  return (
    <div>
      <h2>{todoEdit ? 'Edit Task' : 'New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={title}
          name="title" //debe tener el mismo nombre del atributo del objeto initialFormValue, así hace conexión
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          className="form-control mt-2"
          value={description}
          name="description" //debe tener el mismo nombre del atributo del objeto initialFormValue
          onChange={handleInputChange}
        ></textarea>
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-primary mt-2">
            {todoEdit ? 'Update Task' : 'Add task'}
          </button>
        </div>
      </form>

      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-warning mt-2"
        >
          Cancel Edit
        </button>
      )}

      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {successMessage && (
        <div className="alert alert-success mt-2">{successMessage}</div>
      )}
    </div>
  );
};

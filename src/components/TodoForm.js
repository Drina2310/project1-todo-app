import React, { useState } from 'react';

const initialFormValue = {
  title: '',
  description: '',
};

export const TodoForm = () => {
  const [formValues, setFormValues] = useState(initialFormValue);
  const { title, description } = formValues; //desestructuracion para acceder facil al objeto initialForms

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evita q se recargue la pag cada vez q se le de click al boton del form
    console.log('Submit');
  };

  return (
    <div>
      <h2>New Task</h2>
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
          <button className="btn btn-primary mt-2">Add task</button>
        </div>
      </form>
    </div>
  );
};

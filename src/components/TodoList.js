import React from 'react';
import Todo from './Todo';

export const TodoList = ({
  todos,
  todoDeleted,
  todoCompleted,
  setTodoEdit,
}) => {
  return (
    <>
      <h2>Lista de Tareas</h2>
      {todos.map((todo) => (
        <Todo
          data={todo}
          key={todo.id}
          todoDelete={todoDeleted}
          todoCompleted={todoCompleted}
          setTodoEdit={setTodoEdit}
        />
      ))}
    </>
  );
};

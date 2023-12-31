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
      <h2>Things to do</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          There are no tasks, please add one :)
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            data={todo}
            key={todo.id}
            todoDelete={todoDeleted}
            todoCompleted={todoCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </>
  );
};

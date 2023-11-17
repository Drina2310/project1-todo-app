import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialTodos } from './dataTodos';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  // console.log(todos);
  const todoDeleted = (todoId) => {
    //updateTodos contendrá todas las tareas excepto la que tiene el id que deseas eliminar
    const updateTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updateTodos);
  };

  const todoCompleted = (todoId) => {
    /* const updateTodos = todos.map((todo) => {
      const todoEdit = {
        ...todo,
        completed: !todo.completed,
      };

      if (todo.id === todoId) {
        return todoEdit;
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);*/
    const updateTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodos);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDeleted={todoDeleted}
            todoCompleted={todoCompleted}
          />
        </div>
        <div className="col-4">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {
  const [todos, setTodos] = useState(localTodos || []);
  const [todoEdit, setTodoEdit] = useState(null);

  //Persistencia de los estados (localStorage)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Delete task
  const todoDeleted = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }
    //updateTodos contendrá todas las tareas excepto la que tiene el id que deseas eliminar
    const updateTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updateTodos);
  };

  //Complete Task
  const todoCompleted = (todoId) => {
    const updateTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodos);
  };

  // Add task
  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const updateTodos = [
      newTodo,
      ...todos, //son la lista de todos del estado linea 7
    ];
    setTodos(updateTodos);
  };

  // Edit task
  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );
    setTodos(changedTodos);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDeleted={todoDeleted}
            todoCompleted={todoCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

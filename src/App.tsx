import './App.scss';
import { useState } from 'react';

import users from './api/users';
import todosFromServer, { type Todo, type NewTodo } from './api/todos';

import UserInfo from './components/UserInfo/UserInfo';
import { TodoList } from './components/TodoList';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(todosFromServer);

  const handleAdd = ({ title, userId }: NewTodo) => {
    setTodos(prev => {
      const maxId = prev.length ? Math.max(...prev.map(t => t.id)) : 0;
      const next: Todo = {
        id: maxId + 1,
        title,
        userId,
        completed: false,
      };

      return [...prev, next];
    });
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <UserInfo users={users} onAdd={handleAdd} />

      <TodoList todos={todos} users={users} />
    </div>
  );
};

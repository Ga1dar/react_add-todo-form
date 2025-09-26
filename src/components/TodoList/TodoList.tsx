import type { Todo } from '../../api/todos';
import type { User } from '../../api/users';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
  users: User[];
};

export const TodoList = ({ todos, users }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = users.find(u => u.id === todo.userId);

        return <TodoInfo key={todo.id} todo={todo} user={user} />;
      })}
    </section>
  );
};

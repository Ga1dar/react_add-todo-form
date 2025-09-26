import type { Todo } from '../../api/todos';
import type { User } from '../../api/users';

type Props = {
  todo: Todo;
  user?: User;
};

export const TodoInfo = ({ todo, user }: Props) => {
  return (
    <article
      data-id={todo.id}
      className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {user && (
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      )}
    </article>
  );
};

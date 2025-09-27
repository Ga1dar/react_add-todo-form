import type { User } from '../../api/users';

type Props = { user: User };

export const UserInfo = ({ user }: Props) => {
  return (
    <div className="UserInfo">
      <a href={`mailto:${user.email}`}>{user.name}</a>
    </div>
  );
};

export default UserInfo;

import { User } from "@/core/model/User";
import UserLine from "./UserLine";

export interface UserListProps {
  users: User[]
  onClick: (user: User) => void;
}

export default function UserList(props: UserListProps) {
  return (
    <div className="flex flex-col gap-4 ">
      {props.users.map((user: User) => {
        return (
          <UserLine key={user.id} user={user} onClick={props.onClick} />
        );
      })}
    </div>
  );
}

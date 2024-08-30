import users from "../../data/constants/users";
import UserLine from "./UserLine";

export default function UserList() {
  return (
    <div className="flex flex-col gap-4 ">
      {users.map((user) => {
        return <UserLine key={user.id} user={user} />;
      })}
    </div>
  );
}

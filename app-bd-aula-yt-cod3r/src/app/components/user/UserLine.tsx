import { User } from "@/core/model/User";

export interface UserLineProps {
  user: User;
}

export default function UserLine(props: UserLineProps) {
  return (
    <div className="flex p-4 bg-zinc-900 rounded-md">
      <div className="flex flex-col">
        <span>{props.user.name}</span>
        <span className="text-sm text-zinc-400" >{props.user.email}</span>
      </div>
    </div>
  );
}

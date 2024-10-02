"use client";
import PageComponent from "@/app/components/template/Page";
import UserList from "@/app/components/user/UserList";
import Title from "@/app/components/template/Title";
import { IconPlus, IconUserCog } from "@tabler/icons-react";
import UserForm from "@/app/components/user/UserForm";
import users from "@/app/data/constants/users";
import { useEffect, useState } from "react";
import { User } from "@/core/model/User";
import Backend from "@/backend";

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<Partial<User> | null>(null);

  useEffect(() => {
    Backend.users.get().then(setUsers);
  }, []);

  async function save() {
    if (!user) return;
    await Backend.users.save(user);
    const users = await Backend.users.get();
    setUsers(users);
    setUser(null);
  }

  async function deleteUser() {
    if (!user?.id) return;
    await Backend.users.delete(user.id);
    const users = await Backend.users.get();
    setUsers(users);
    setUser(null);
  }

  return (
    <PageComponent>
      <Title
        titleContent="Users"
        subtitleContent="Manage System Users"
        icon={IconUserCog}
      />
      {user ? (
        <UserForm
          user={user}
          onChange={setUser}
          onSave={save}
          onCancel={() => setUser(null)}
          onDelete={deleteUser}
        />
      ) : (
        <>
          {" "}
          <div className="flex justify-end">
            <button
              className="bg-blue-500 px-4 py-2 rounded-md flex items-center gap-2 mb-8"
              onClick={() => setUser({})}
            >
              <IconPlus />
              <span>New user</span>
            </button>
          </div>
          <UserList users={users} onClick={setUser} />
        </>
      )}
    </PageComponent>
  );
}

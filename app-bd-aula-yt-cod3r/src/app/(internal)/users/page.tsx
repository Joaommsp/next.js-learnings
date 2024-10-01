"use client";
import PageComponent from "@/app/components/template/Page";
import UserList from "@/app/components/user/UserList";
import Title from "@/app/components/template/Title";
import { IconUserCog } from "@tabler/icons-react";
import UserForm from "@/app/components/user/UserForm";
import users from "@/app/data/constants/users";
import { useState } from "react";
import { User } from "@/core/model/User";

export default function Page() {
  const [user, setUser] = useState<User>(users[0]);

  function save() {
    // salvar no banco de dados
  }

  return (
    <PageComponent>
      <Title
        titleContent="Users"
        subtitleContent="Manage System Users"
        icon={IconUserCog}
      />
      {/* <UserList /> */}
      <UserForm
        user={user}
        onChange={setUser}
        onSave={save}
        onCancel={() => {}}
      />
    </PageComponent>
  );
}

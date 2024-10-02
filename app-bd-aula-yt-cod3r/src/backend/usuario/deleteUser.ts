"use server";

import UserRepo from "./UserRepo";

export default async function deleteUser(id: number) {
  return UserRepo.delete(id);
}

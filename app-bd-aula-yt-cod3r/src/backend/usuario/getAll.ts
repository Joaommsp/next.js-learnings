"use server";

import UserRepo from "./UserRepo";

export default async function getAll() {
  return UserRepo.read();
}

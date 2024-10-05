"use server";

import produtos from "../constants/produtos";
import { wait } from "./utils";

export default async function getProducts() {
  await wait(3000);
  return produtos;
}

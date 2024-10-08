"use server";

import { wait } from "./utils";
import produtos from "../constants/produtos";

// export interface getProductByIdProps {
//   id: number;
// }

export default async function getProductById(id: number) {
  await wait(3000);
  const produto = produtos.find((produto) => produto.id === id);
  return produto || null;
}

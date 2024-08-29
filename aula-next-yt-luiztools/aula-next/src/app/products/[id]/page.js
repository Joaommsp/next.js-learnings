"use client"

import { useParams } from "next/navigation";

export default function Products() {
  const params = useParams();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl">PRODUCT</h1>
        <span>ID: {params.id}</span>
      </div>
    </main>
  );
}

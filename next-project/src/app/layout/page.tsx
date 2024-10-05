import Link from "next/link";

export default function PageWithLayout() {
  return (
    <div className="flex flex-col justify-center h-screen items-center gap-5 text-2xl">
      <h1>Conteúdo da página RAIZ</h1>
      <Link href="/layout/child" className="button">
        Ir para a página FILHA
      </Link>
    </div>
  );
}

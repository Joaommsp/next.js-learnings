import Link from "next/link";

export default function ChildPageWithLayput() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5 text-2xl">
      <h1>Conteúdo da página FILHA</h1>

      <div className="flex gap-5">
        <Link href="/layout" className="button">
          Voltar
        </Link>
        <Link href="/" className="button">
          Início
        </Link>
      </div>
    </div>
  );
}

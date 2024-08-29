async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
  return response.json();
}

export default async function Pokemons() {
  const { results } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-16">
        <h1 className="text-3xl">POKEMONS</h1>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul>
          {results ? 
            results.map(p => (<li key={p.id} >{p.name}</li>))
         :  <></>
          }
        </ul>
      </div>
    </main>
  );
}

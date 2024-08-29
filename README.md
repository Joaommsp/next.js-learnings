# Tailwind CSS Learnings

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
</div>

###

</div>

###

<img src="./public/images/nextjs-logo.png" alt="">

###

> Next.js é um framework de desenvolvimento para React que facilita a construção de aplicações web e sites. Ele oferece funcionalidades como renderização no lado do servidor (SSR), geração de sites estáticos (SSG), roteamento automático e otimização de desempenho. Essencialmente, Next.js ajuda a criar aplicações React rápidas e escaláveis com menos configuração.

</div>

<ul align="left">
  <li>Framework para ReactJS</li>
  <li>Server-Side Rendering (SSR)</li>
  <li>Pré-configurado (Router, etc)</li>
</ul>

#

### Server-Side Rendering (SSR)

<p>
Significa que a renderização da página ocorre no servidor a cada requisição. Quando um usuário acessa uma página, o Next.js gera o HTML dessa página no servidor e o envia para o cliente. Isso pode melhorar o SEO e o tempo de carregamento inicial, pois o conteúdo está pronto para ser exibido quando chega ao navegador.
</p>

### Search Engine Optimization (SEO)

<p>Conjunto de práticas e técnicas usadas para melhorar a visibilidade e a classificação de um site nos resultados dos motores de busca</p>

### Criando um projeto Next.js (create-next-app)

`npx create-next-app@latest`

### ESLINT

<p><strong>ESLint</strong> é uma ferramenta de linting(analisar o código fonte para identificar e corrigir problemas de estilo, erros e padrões inconsistentes.) para <strong>JavaScript</strong> e TypeScript. Ela analisa seu código para identificar e reportar problemas de estilo e erros, ajudando a manter a qualidade e a consistência do código</p>

### Estrutura básica de pastas para um projecto Next.js

```
my-project/
  .next/
  node_modules/
  pages/
  public/
  package.json
```

### App Router

<p>
Uma nova maneira de organizar e estruturar o projeto. A pasta app é uma nova abordagem para a criação de rotas e layouts em Next.js 13 e posterior, substituindo a estrutura de páginas tradicional.
</p>

### Criar uma Nova Rota

Para cria uma nova rota , pasta adicionar uma nova pasta e utilizar um componente `page.js` dentro dessa nova pasta:

### Navegue até a pasta app e crie uma nova pasta chamada sobre:

`mkdir app/sobre`

### Dentro da nova pasta sobre, crie um arquivo page.js:

```
// app/sobre/page.js
export default function Sobre() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Sobre Nós</h1>
      <p className="mt-4">Esta é a página sobre nós.</p>
    </div>
  );
}
```

<strong>Com isso, a nova rota /sobre será criada automaticamente.</strong>

<img src="./public/images/my-first-next-app-screen.png" alt="">

### Dynamic Routes

<p>Permite que criar rotas que podem variar com base nos parâmetros da URL.</p>

### Criar uma Página Dinâmica

<p>Para criar uma rota dinâmica basta criar uma rota inicial ( criando uma pasta )
e dentro dessa nova rota inserir uma rota variável ( como um ID ) entre colchetes :

```
mkdir -p app/produtos/[id]
```

```
// Importando o useParams para capturar parâmetros dinâmicos que são envidado atravéz da URL
import { useParams } from "next/navigation";

export default function Products() {
  // Declarando uma constante que receberá a execução do Hook useParams
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

```

### Uso do (use client)

```
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
```



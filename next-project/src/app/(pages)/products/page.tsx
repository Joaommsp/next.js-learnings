import ProdutoItem from "@/components/product/ProductItem";
import getProducts from "@/data/service/getProducts";

export default async function ProductsPage() {
  const produtos = await getProducts();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black">Lista de Produtos</h1>
      <div className="flex flex-col gap-5">
        {produtos.map((produto) => (
          <ProdutoItem produto={produto} key={produto.id} />
        ))}
      </div>
    </div>
  );
}

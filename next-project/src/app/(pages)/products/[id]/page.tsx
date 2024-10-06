import ProductDetails from "@/components/product/ProductDetails";
import getProductById from "@/data/service/getProductById";
import Link from "next/link";

interface ProductIdPageProps {
  productId: number;
  params: {
    id: number;
  };
}

export default async function ProductIdPage(props: ProductIdPageProps) {
  console.log(+props.params.id);
  const produto = await getProductById(+props.params.id);

  if (!produto) {
    return (
      <div>
        <h1>Produto não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <ProductDetails produto={produto} />
      <Link href="/products" className="self-center bg-blue-500 p-2 rounded-md">
        Voltar
      </Link>
    </div>
  );
}

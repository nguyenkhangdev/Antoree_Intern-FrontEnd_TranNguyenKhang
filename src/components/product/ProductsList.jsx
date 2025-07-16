import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  if (products.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-600">
        Không tìm thấy sản phẩm nào phù hợp.
      </p>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

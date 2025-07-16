import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ViewedService from "../../services/ViewedService";

export default function ProductViewed() {
  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    setViewedProducts(ViewedService.get());
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Lịch sử xem</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {viewedProducts.length === 0 ? (
          <div>Bạn chưa xem sản phẩm nào.</div>
        ) : (
          viewedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ViewedService from "../../services/ViewedService";
import { SkeletonCard } from "../SkeletonCard";

export default function ProductViewed() {
  const [viewedProducts, setViewedProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    setLoadingData(true);
    setViewedProducts(ViewedService.get());
    setLoadingData(false);
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Lịch sử xem sản phẩm</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loadingData ? (
          [1, 2, 3].map((index) => <SkeletonCard key={index} />)
        ) : viewedProducts.length === 0 ? (
          <p className="text-center mt-8 text-gray-600">
            Bạn chưa xem sản phẩm nào.
          </p>
        ) : (
          viewedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

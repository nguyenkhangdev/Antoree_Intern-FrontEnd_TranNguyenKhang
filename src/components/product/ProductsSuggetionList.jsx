import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SkeletonCard } from "../SkeletonCard";

export default function ProductsSuggetionList({
  products,
  setProducts,
  loadingData,
}) {
  const [loadingFavoriteButton, setLoadingFavoriteButton] = useState(false);

  // embla-carousel autoplay
  //useEmblaCarousel tra ve 1 tham chiếu (react ref)
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000 }),
  ]);

  const handleFavorite = async (product) => {
    if (loadingFavoriteButton) return;
    setLoadingFavoriteButton(true);
    api
      .put(`/products/${product.id}`, { favorite: !product.favorite })
      .then((res) => {
        const updated = res.data;
        if (updated.favorite === true) {
          toast.success(
            <div>
              Đã thêm sản phẩm vào yêu thích.{" "}
              <Link
                to="/san-pham/yeu-thich"
                className="underline text-blue-500 hover:text-blue-700"
              >
                Xem danh sách
              </Link>
            </div>
          );
        } else {
          toast.success(
            <div>
              Đã loại sản phẩm khỏi yêu thích.{" "}
              <Link
                to="/san-pham/yeu-thich"
                className="underline text-blue-500 hover:text-blue-700"
              >
                Xem danh sách
              </Link>
            </div>
          );
        }
        // Cập nhật danh sách products
        setProducts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
      })
      .catch(() => {
        toast.error("Thêm sản phẩm thất bại.");
      })
      .finally(() => {
        setLoadingFavoriteButton(false);
      });
  };

  return (
    // gán emblaRef vào danh sách sản phẩm để có thể thể điều khiển nó như một carousel
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {loadingData ? (
          [1, 2, 3].map((index) => <SkeletonCard key={index} />)
        ) : products.length === 0 ? (
          <p className="text-center mt-8 text-gray-600">
            Không tìm thấy sản phẩm nào phù hợp.
          </p>
        ) : (
          products.map((product) => (
            <div className="w-sm flex-shrink-0" key={product.id}>
              <ProductCard product={product} onFavorite={handleFavorite} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

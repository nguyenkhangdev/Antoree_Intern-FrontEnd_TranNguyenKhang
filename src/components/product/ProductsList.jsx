import { toast } from "react-toastify";
import api from "../../services/axios";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SkeletonCard } from "../SkeletonCard";

export default function ProductsList({ products, setProducts, loadingData }) {
  //biến loading để tránh spam handleFavorite
  const [loadingFavoriteButton, setLoadingFavoriteButton] = useState(false);

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
  //3 trạng thái của danh sách sản phẩm
  //hiện Skeleton Card khi dữ liệu đang load
  //khi danh sách không có hoặc lỗi thì hiện "Không tìm thấy sản phẩm nào phù hợp"
  //hiện danh sách bình thường nếu
  return (
    <div className="max-w-[1100px] mx-auto p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loadingData ? (
        [1, 2, 3].map((index) => <SkeletonCard key={index} />)
      ) : products.length === 0 ? (
        <p className="text-center mt-8 text-gray-600 col-span-3">
          Không tìm thấy sản phẩm nào phù hợp.
        </p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onFavorite={handleFavorite}
          />
        ))
      )}
    </div>
  );
}

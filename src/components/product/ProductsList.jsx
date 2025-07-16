import { toast } from "react-toastify";
import api from "../../services/axios";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsList({ products, setProducts }) {
  //biến loading để tránh spam handleFavorite
  const [loadingFavoriteButton, setLoadingFavoriteButton] = useState(false);

  if (products.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-600">
        Không tìm thấy sản phẩm nào phù hợp.
      </p>
    );
  }
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
    <div className="max-w-[1100px] mx-auto p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onFavorite={handleFavorite}
        />
      ))}
    </div>
  );
}

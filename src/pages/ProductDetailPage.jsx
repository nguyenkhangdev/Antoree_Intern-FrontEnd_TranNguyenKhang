import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import ProductService from "../services/ProductService"; // giả định đã có
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

export default function ProductDetailPage() {
  const { id } = useParams(); // ID từ URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductService.getById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        toast.error("Không thể tải chi tiết sản phẩm");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Đang tải...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500">
        Sản phẩm không tồn tại
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
      <div className="w-full">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full h-auto shadow-md"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-xl text-red-600 font-semibold">
          {product.price.toLocaleString("vi-VN")}₫
        </p>
        <div className="flex items-center gap-2 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(product.rating)
                  ? "fill-yellow-400"
                  : "stroke-yellow-400"
              }`}
            />
          ))}
          <span className="text-gray-600 text-sm">{product.rating} / 5</span>
        </div>
        <p className="text-gray-600 text-sm">{product.category}</p>

        <p className="text-gray-700 text-base">{product.shortDescription}</p>
        <hr className="my-4" />
        <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
          {product.fullDescription}
        </p>

        <Button className="mt-6 w-full md:w-fit px-6 py-3">
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart } from "lucide-react";
import ProductModal from "./ProductModal";
import ViewedService from "../../services/ViewedService";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onFavorite }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  //chuyen den trang chi tiết sản phẩm
  const handleGotoCard = (id) => {
    navigate(`/san-pham/${id}`);
  };

  return (
    <div className="border rounded-lg shadow p-4 transition-transform hover:scale-105">
      <div
        onClick={() => handleGotoCard(product.id)}
        className=" cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.shortDescription}</p>
        <p className="text-green-600 font-bold mt-2">
          {product.price.toLocaleString()}₫
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button
          //mở modal và lưu vào lịch sử xem
          onClick={(e) => {
            e.stopPropagation(); //ngăn sự kiện click của thẻ cha đè lên
            setOpen(true);
            ViewedService.post(product);
          }}
          className="z-20"
        >
          Xem chi tiết
        </Button>
        <Button
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation(); //ngăn sự kiện click của thẻ cha đè lên
            onFavorite(product);
          }}
        >
          <Heart
            className="text-red-500 h-6! w-6! z-20"
            fill={product.favorite ? "red" : "none"}
            color="red"
          />
        </Button>
      </div>

      <ProductModal product={product} open={open} setOpen={setOpen} />
    </div>
  );
}

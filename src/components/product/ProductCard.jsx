import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart } from "lucide-react";
import ProductModal from "./ProductModal";

export default function ProductCard({ product, onFavorite }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow p-4">
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

      <div className="flex justify-between items-center mt-4">
        <Button onClick={() => setOpen(true)}>Xem chi tiết</Button>
        <Button variant="ghost" onClick={() => onFavorite(product)}>
          <Heart
            className="text-red-500 h-6! w-6!"
            fill={product.favorite ? "red" : "none"}
            color="red"
          />
        </Button>
      </div>

      <ProductModal product={product} open={open} setOpen={setOpen} />
    </div>
  );
}

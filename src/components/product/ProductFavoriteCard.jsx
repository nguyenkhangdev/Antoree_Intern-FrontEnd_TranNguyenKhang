import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function ProductFavoriteCard({ product, onFavorite }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 border rounded-lg p-4 bg-white shadow hover:shadow-md w-full transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-32 h-48 md:h-32 object-cover rounded-lg"
      />
      <div className="relative flex-1 flex flex-col justify-between w-full">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base md:text-lg font-semibold">
              {product.name}
            </h3>
            <p className="hidden md:block text-gray-600 text-sm mb-2 line-clamp-2">
              {product.shortDescription}
            </p>
            <p className="text-sm text-yellow-500 mb-1">⭐ {product.rating}</p>
            <p className="text-red-600 font-bold text-lg">
              {product.price.toLocaleString()}₫
            </p>
          </div>

          <Button variant="ghost" onClick={() => onFavorite(product)}>
            <Heart
              className="text-red-500 h-6! w-6!"
              fill={product.favorite ? "red" : "none"}
              color="red"
            />
          </Button>
        </div>

        <div className="md:absolute md:right-0 md:bottom-0 mt-4 md:mt-2">
          <Button className="w-full md:w-auto bg-green-500 hover:bg-green-600">
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
}

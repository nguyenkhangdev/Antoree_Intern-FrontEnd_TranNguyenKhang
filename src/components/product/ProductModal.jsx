import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProductModal({ product, open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4 text-gray-700">{product.fullDescription}</p>
        <p className="text-green-600 font-bold mt-2">
          {product.price.toLocaleString()}₫
        </p>
        <p className="mt-1 text-sm text-yellow-500">
          Đánh giá: {product.rating}/5
        </p>
      </DialogContent>
    </Dialog>
  );
}

import { useEffect, useState } from "react";

import ProductsList from "../components/product/ProductsList";
import ProductFilter from "../components/product/ProductFilter";

const productsData = [
  {
    id: "1",
    name: "Sản phẩm A",
    price: 300000,
    image: "/images/product-a.jpg",
    shortDescription: "Mô tả ngắn gọn sản phẩm A",
    fullDescription: "Đây là mô tả chi tiết sản phẩm A...",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Sản phẩm B",
    price: 800000,
    image: "/images/product-b.jpg",
    shortDescription: "Mô tả ngắn sản phẩm B",
    fullDescription: "Thông tin sản phẩm B rất thú vị...",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Sản phẩm C",
    price: 1500000,
    image: "/images/product-c.jpg",
    shortDescription: "Mô tả sản phẩm C",
    fullDescription: "Chi tiết về sản phẩm C...",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Sản phẩm D",
    price: 450000,
    image: "/images/product-d.jpg",
    shortDescription: "Mô tả sản phẩm D",
    fullDescription: "Sản phẩm D phù hợp với mọi đối tượng...",
    rating: 4.2,
  },
  {
    id: "5",
    name: "Sản phẩm E",
    price: 950000,
    image: "/images/product-e.jpg",
    shortDescription: "Sản phẩm E chất lượng cao",
    fullDescription: "Chi tiết về chất lượng vượt trội của sản phẩm E...",
    rating: 4.6,
  },
  {
    id: "6",
    name: "Sản phẩm F",
    price: 1200000,
    image: "/images/product-f.jpg",
    shortDescription: "Thiết kế đẹp mắt, tiện dụng",
    fullDescription: "Sản phẩm F nổi bật với thiết kế hiện đại...",
    rating: 4.8,
  },
  {
    id: "7",
    name: "Sản phẩm G",
    price: 200000,
    image: "/images/product-g.jpg",
    shortDescription: "Giá rẻ, phù hợp học sinh",
    fullDescription: "Gói sản phẩm G dành cho người mới bắt đầu...",
    rating: 4.0,
  },
  {
    id: "8",
    name: "Sản phẩm H",
    price: 1100000,
    image: "/images/product-h.jpg",
    shortDescription: "Công nghệ tiên tiến",
    fullDescription: "Sản phẩm H sử dụng công nghệ mới nhất...",
    rating: 4.9,
  },
  {
    id: "9",
    name: "Sản phẩm I",
    price: 550000,
    image: "/images/product-i.jpg",
    shortDescription: "Lựa chọn phổ biến",
    fullDescription: "Được nhiều người dùng yêu thích nhờ giá trị sử dụng...",
    rating: 4.3,
  },
  {
    id: "10",
    name: "Sản phẩm J",
    price: 750000,
    image: "/images/product-j.jpg",
    shortDescription: "Đáng tin cậy và bền bỉ",
    fullDescription: "Sản phẩm J có thời gian sử dụng lâu dài...",
    rating: 4.4,
  },
  {
    id: "11",
    name: "Sản phẩm K",
    price: 1700000,
    image: "/images/product-k.jpg",
    shortDescription: "Sản phẩm cao cấp",
    fullDescription: "Sản phẩm K nằm trong phân khúc cao cấp...",
    rating: 5.0,
  },
  {
    id: "12",
    name: "Sản phẩm L",
    price: 600000,
    image: "/images/product-l.jpg",
    shortDescription: "Sản phẩm phổ thông",
    fullDescription: "Thích hợp sử dụng cho nhu cầu học tập cơ bản...",
    rating: 4.1,
  },
];

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ searchTerm: "", priceRange: "" });

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(filter.searchTerm.toLowerCase());

    let matchPrice = true;
    if (filter.priceRange === "< 500K") matchPrice = product.price < 500000;
    else if (filter.priceRange === "500K – 1 triệu")
      matchPrice = product.price >= 500000 && product.price <= 1000000;
    else if (filter.priceRange === "> 1 triệu")
      matchPrice = product.price > 1000000;

    return matchName && matchPrice;
  });

  return (
    <div>
      <ProductFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onFilterChange={setFilter}
      />
      <ProductsList products={filteredProducts} />
    </div>
  );
}

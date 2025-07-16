import { useEffect, useState } from "react";

import ProductsList from "../components/product/ProductsList";
import ProductFilter from "../components/product/ProductFilter";

import { toast } from "react-toastify";
import ProductService from "../services/ProductService";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ searchTerm: "", priceRange: "" });

  const fetchData = async () => {
    //1 các khác là truyền filter vào params url, nhưng diều này
    //sẽ khiến client gọi api nhiều lần, gây tốn tài nguyên BE và mất thời gian phản hồi
    //làm người dùng đợi
    // nhưng có dữ liệu danh sách sản phẩm mới nhất nếu có thay đổi (trường hợp này ít xảy ra)
    //hiện tại toi chọn lọc ở Frontend do API không hỗ trợ
    ProductService.get() //nếu api hỗ trợ thì truyền thêm {params:{searchTerm,category,page, limits..}}
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        toast.error("Tìm kiếm sản phẩm thất bại");
      });
  };

  useEffect(() => {
    fetchData();
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
      <ProductsList products={filteredProducts} setProducts={setProducts} />
    </div>
  );
}

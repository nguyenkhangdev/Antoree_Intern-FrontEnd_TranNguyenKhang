import { useEffect, useState } from "react";

import ProductsList from "../components/product/ProductsList";
import ProductFilter from "../components/product/ProductFilter";

import { toast } from "react-toastify";
import ProductService from "../services/ProductService";
import ProductSuggestion from "../components/product/ProductSuggestion";
import Pagination from "../components/Paginate";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({
    searchTerm: "",
    priceRange: "",
    category: "",
    page: 1,
    limit: 9,
  });
  const [loadingData, setLoadingData] = useState(true);
  const [filteredCount, setFilteredCount] = useState(0);

  const fetchData = async () => {
    setLoadingData(true);
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
      })
      .finally(() => {
        setLoadingData(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //lọc dữ liệu ở local
  useEffect(() => {
    const filtered = products.filter((product) => {
      //chuyển sang chữ thường đễ so sánh
      const matchName = product.name
        .toLowerCase()
        .includes(filter.searchTerm.toLowerCase());

      const matchCategory = filter.category
        ? product.category === filter.category
        : true;

      let matchPrice = true;
      if (filter.priceRange === "< 500K") {
        matchPrice = product.price < 500000;
      } else if (filter.priceRange === "500K – 1 triệu") {
        matchPrice = product.price >= 500000 && product.price <= 1000000;
      } else if (filter.priceRange === "> 1 triệu") {
        matchPrice = product.price > 1000000;
      }

      return matchName && matchCategory && matchPrice;
    });

    setFilteredCount(filtered.length);
    const startIndex = (filter.page - 1) * filter.limit;
    const paginated = filtered.slice(startIndex, startIndex + filter.limit);

    setFilteredProducts(paginated);
  }, [filter, products]);

  useEffect(() => {
    // Khi filter.category, filter.priceRange, hoặc filter.searchTerm thay đổi,
    // reset page về 1
    setFilter((prev) => ({
      ...prev,
      page: 1,
    }));
  }, [filter.category, filter.priceRange, filter.searchTerm]);

  console.log(filter);
  return (
    <div>
      <ProductFilter filter={filter} setFilter={setFilter} />
      <ProductsList
        products={filteredProducts}
        setProducts={setFilteredProducts}
        loadingData={loadingData}
      />
      <Pagination
        totalPages={Math.ceil(filteredCount / filter.limit)}
        currentPage={filter.page}
        onPageChange={(page) =>
          setFilter((prev) => ({
            ...prev,
            page: page,
          }))
        }
      />
      <ProductSuggestion />
    </div>
  );
}

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SuggestionService from "../../services/SuggestionService";
import ProductsSuggetionList from "./ProductsSuggetionList";

export default function ProductSuggestion() {
  const [products, setProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const fetchData = async () => {
    setLoadingData(true);
    SuggestionService.get({ userId: 1 })
      .then((res) => {
        setProducts(res.data[0].products);
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

  return (
    // scroll-mt-20 trừ đi mt-20 khi scroll bằng thẻ a đến id, nhằm tránh bị header sticky che mất nội dung
    <div
      id="product-suggestion"
      className="max-w-[1100px] mx-auto scroll-mt-20 mt-5 mb-10"
    >
      <h2 className="text-2xl font-bold p-5">Sản phẩm gợi ý</h2>

      <ProductsSuggetionList
        products={products}
        setProducts={setProducts}
        loadingData={loadingData}
      />
    </div>
  );
}

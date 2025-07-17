import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import Banner from "../../assets/banner.jpg";
import DropdownProps from "../DropdownProps";

export default function ProductFilter({ filter, setFilter }) {
  // const handlePriceChange = (selected) => {
  //   setPriceRange(selected);
  // };

  // const handleRemoveFilter = (type) => {
  //   if (type === "category") setCategory("");
  //   if (type === "price") setPriceRange("");
  //   if (type === "search") setSearchTerm("");
  // };

  const handleClearAll = () => {
    setFilter({
      searchTerm: "",
      priceRange: "",
      category: "",
      page: 1,
      limit: 9,
    });
  };

  return (
    <section className="relative text-white pt-16">
      {/* Background banner */}
      <img
        src={Banner}
        className="absolute inset-0 w-full h-72 object-cover object-center"
        alt="Banner"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          KHÁM PHÁ SẢN PHẨM TIẾNG ANH CHẤT LƯỢNG
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Chọn lựa khóa học, tài liệu và giáo trình phù hợp với bạn
        </p>
      </div>

      {/* Search + Filters */}
      <div className="relative z-10 mt-12 flex justify-center">
        <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-3 md:gap-0 bg-white shadow-lg rounded-md p-4 items-center w-[90%] max-w-5xl">
          {/* Search Input */}
          <div className="md:col-span-3 sm:col-span-3 flex items-center border px-3 py-3 rounded w-full md:w-auto flex-1 h-full">
            <Search className="text-gray-400 h-5 w-5 mr-2 " />
            <input
              type="text"
              placeholder="Bạn muốn học gì?"
              className="outline-none w-full text-base text-gray-700 placeholder:text-gray-400"
              value={filter.searchTerm}
              onChange={(e) =>
                setFilter((pre) => ({ ...pre, searchTerm: e.target.value }))
              }
            />
          </div>

          <div className="flex flex-row  md:col-span-2 sm:col-span-2">
            {/* Category Dropdown */}
            <div className="w-1/2 h-full">
              <DropdownProps
                label="Loại"
                items={["Lớp học trực tuyến", "Giáo trình", "Tài liệu"]}
                item={filter.category}
                onSelect={(value) => {
                  setFilter((pre) => ({ ...pre, category: value }));
                }}
              />
            </div>
            <div className="w-1/2 h-full">
              {/* Price Dropdown */}
              <DropdownProps
                label="Giá"
                items={["< 500K", "500K – 1 triệu", "> 1 triệu"]}
                item={filter.priceRange}
                onSelect={(value) => {
                  setFilter((pre) => ({ ...pre, priceRange: value }));
                }}
              />
            </div>
          </div>

          <Button className="sm:ml-3 sm:font-bold sm:text-lg bg-green-500 hover:bg-green-600 rounded-full h-full px-6 md:px-8 md:py-3 md:col-span-1">
            Tìm sản phẩm
          </Button>
        </div>
      </div>

      {/* Trạng thái filter */}
      <div className="relative max-w-[1050px] mx-auto px-4 z-10 my-10 flex md:flex-row flex-col gap-3 md:gap-1 justify-center">
        <div className="w-[90%] max-w-5xl flex items-center gap-2 text-sm md:text-base text-gray-900 flex-wrap">
          <span className="font-semibold uppercase text-sm text-black">
            TÌM KIẾM HIỆN TẠI:
          </span>

          {filter.searchTerm && (
            <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
              {filter.searchTerm}
              <button
                onClick={() => {
                  setFilter((pre) => ({ ...pre, searchTerm: "" }));
                }}
                className="text-gray-500 hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {filter.category && (
            <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
              {filter.category}
              <button
                onClick={() => {
                  setFilter((pre) => ({ ...pre, category: "" }));
                }}
                className="text-gray-500 hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {filter.priceRange && (
            <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
              {filter.priceRange}
              <button
                onClick={() => {
                  setFilter((pre) => ({ ...pre, priceRange: "" }));
                }}
                className="text-gray-500 hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <button
            onClick={handleClearAll}
            className="ml-2 text-blue-700 font-semibold hover:underline"
          >
            Xóa bộ lọc
          </button>
        </div>
        <a
          href="#product-suggestion"
          className="bg-green-500 hover:bg-green-600 py-2 px-3 whitespace-nowrap rounded-full text-sm md:text-base w-fit"
        >
          Gợi ý sản phẩm
        </a>
      </div>
    </section>
  );
}

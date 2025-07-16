import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import Banner from "../../assets/banner.jpg";
import DropdownProps from "../DropdownProps";

export default function ProductFilter({
  searchTerm,
  setSearchTerm,
  onFilterChange,
}) {
  const [priceRange, setPriceRange] = useState("");

  // Gọi khi filter thay đổi
  useEffect(() => {
    onFilterChange({ searchTerm, priceRange });
  }, [searchTerm, priceRange, onFilterChange]);

  const handlePriceChange = (selected) => {
    setPriceRange(selected);
  };

  const handleRemoveFilter = (type) => {
    if (type === "price") setPriceRange("");
    if (type === "search") setSearchTerm("");
  };

  const handleClearAll = () => {
    setPriceRange("");
    setSearchTerm("");
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
        <h1 className="text-3xl md:text-5xl font-extrabold">
          TÌM GIÁO VIÊN TIẾNG ANH TỐT NHẤT
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Tìm giáo viên tiếng Anh tốt nhất trên toàn cầu
        </p>
      </div>

      {/* Search + Filters */}
      <div className="relative z-10 mt-12 flex justify-center">
        <div className="bg-white shadow-lg rounded-md p-4 flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4 w-[90%] max-w-5xl">
          {/* Search Input */}
          <div className="flex items-center border px-3 py-3 rounded w-full md:w-auto flex-1">
            <Search className="text-gray-400 h-5 w-5 mr-2" />
            <input
              type="text"
              placeholder="Bạn muốn học gì?"
              className="outline-none w-full text-base text-gray-700 placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Price Dropdown */}
          <DropdownProps
            label="Giá"
            items={["< 500K", "500K – 1 triệu", "> 1 triệu"]}
            onSelect={handlePriceChange}
          />

          <Button className="bg-green-500 hover:bg-green-600 rounded-full px-6 md:px-8 md:py-5">
            Tìm giáo viên
          </Button>
        </div>
      </div>

      {/* Trạn thái filter */}

      <div className="relative z-10 my-10 flex justify-center">
        <div className="w-[90%] max-w-5xl flex items-center gap-2 text-sm md:text-base text-gray-900 flex-wrap">
          <span className="font-semibold uppercase text-sm text-black">
            TÌM KIẾM HIỆN TẠI:
          </span>

          {searchTerm && (
            <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
              {searchTerm}
              <button
                onClick={() => handleRemoveFilter("search")}
                className="text-gray-500 hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {priceRange && (
            <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
              {priceRange}
              <button
                onClick={() => handleRemoveFilter("price")}
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
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import logo from "../assets/logo_withtagline.svg";
import SelectLanguage from "../components/header/SelectLanguage";
import HoverDropdown from "../components/header/HoverUserMenu";
import SiderBar from "../components/header/SiderBar";
import UserDropdown from "../components/header/UserDropdown";

export default function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-black sticky top-0 z-50 px-6 py-2">
      <div className="container max-w-[1100px] mx-auto flex h-16 items-center justify-between ">
        <div className="flex flex-row">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={logo} alt="ANTORE LOGO" className="h-8" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 ml-5">
            <Link to="/" className="font-semibold hover:text-green-500">
              Giáo viên
            </Link>
            <Link to="/san-pham" className="font-semibold hover:text-green-500">
              Sản phẩm
            </Link>
            <Link to="/#" className="font-semibold hover:text-green-500">
              Đánh giá của học viên
            </Link>
            <HoverDropdown />
          </nav>
        </div>

        <div className="flex flex-row items-center">
          {/* Call to Action */}
          <div className="hidden lg:flex flex-row items-center gap-2">
            <Button className="bg-orange-600">Học thử MIỄN PHÍ ngay</Button>
            <SelectLanguage />
          </div>
          <UserDropdown />

          {/* Mobile menu button */}
          <SiderBar />
        </div>
      </div>
    </header>
  );
}

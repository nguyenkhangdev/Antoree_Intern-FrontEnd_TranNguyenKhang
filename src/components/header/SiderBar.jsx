import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SelectLanguage from "./SelectLanguage";
import { Separator } from "@/components/ui/separator";

export default function SiderBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-7! w-7!" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 p-5">
          <nav className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col w-full items-center gap-2">
              <Link
                to={"/sign-in"}
                className="font-bold hover:text-green-500 p-2"
              >
                Đăng nhập
              </Link>
              <Button className="bg-orange-600 w-full">
                Học thử MIỄN PHÍ ngay
              </Button>
              <SelectLanguage />
            </div>
            <Separator />
            <Link
              to="/san-pham"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Sản phẩm
            </Link>
            <Link
              to="/san-pham/yeu-thich"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Yêu thích
            </Link>
            <Link
              to="/san-pham/da-xem"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Đã xem
            </Link>
            <Link
              to="/#"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Về chúng tôi
            </Link>
            <Link
              to="/#"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Thanh toán
            </Link>
            <Link
              to="/#"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Liên hệ
            </Link>
            <Link
              to="/#"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Trợ giúp
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import userAvatar from "../../assets/user-avatar.svg";
import { Link } from "react-router-dom";

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row items-center hover:cursor-pointer p-2">
          <img src={userAvatar} alt="Avatar" className="h-9" />
          <ChevronDown className="h-9" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-3">
        <DropdownMenuItem className="hover:text-green-500">
          Tài khoản
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:text-green-500">
          <Link to={"/san-pham/yeu-thich"}>Sản phẩm yêu thích</Link>
        </DropdownMenuItem>
        <Separator className="mt-2 mb-1" />
        <DropdownMenuItem className="hover:text-green-500">
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

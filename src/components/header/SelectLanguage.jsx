import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import vnLang from "../../assets/vn-lang.png";

export default function SelectLanguage() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row hover:cursor-pointer p-2">
          <img src={vnLang} alt="vn lang" className="h-6" />
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
        <DropdownMenuItem>Tiếng Anh</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function HoverDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative inline-block"
      >
        <DropdownMenuTrigger asChild>
          <div className="font-semibold hover:text-green-500 cursor-pointer">
            Về chúng tôi
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className=" font-semibold p-2">
          <DropdownMenuItem className="hover:text-green-500 py-3">
            Về chúng tôi
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-green-500 py-3">
            Thanh toán
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-green-500 py-3">
            Liên hệ
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-green-500 py-3">
            Trợ giúp
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DropdownProps({ label, items, onSelect }) {
  const [selected, setSelected] = useState("");

  const handleSelect = (item) => {
    setSelected(item);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-full text-gray-700 bg-white border rounded px-4 py-2 md:px-8 md:py-4 flex items-center gap-1 text-sm md:text-base hover:bg-gray-100"
        >
          {selected || label}
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item, idx) => (
          <DropdownMenuItem key={idx} onClick={() => handleSelect(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

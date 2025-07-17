import { useEffect, useRef, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { BotMessageSquare } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// API giả với dữ liệu chi tiết
const mockProducts = async () => {
  return [
    {
      name: "Tài liệu luyện thi IELTS 6.5+",
      price: 299000,
      image: "/product-image.jpg",
      shortDescription: "Tài liệu chuyên sâu cho người học luyện thi IELTS.",
      fullDescription:
        "Bao gồm bài đọc, nghe, viết và nói kèm đáp án chi tiết.",
      rating: 4.8,
      category: "Tài liệu",
      favorite: false,
      id: "2",
    },
    {
      name: "Khóa học Phát âm tiếng Anh chuẩn giọng Mỹ",
      price: 1199000,
      image: "/product-image.jpg",
      shortDescription: "Nâng cao khả năng phát âm chuẩn như người bản xứ.",
      fullDescription:
        "Tập trung vào âm khó, nối âm, ngữ điệu và phản xạ phát âm.",
      rating: 4.6,
      category: "Lớp học trực tuyến",
      favorite: true,
      id: "3",
    },
  ];
};

export function ChatPopover() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loadingData, setLoadingData] = useState(false);
  const chatEndRef = useRef(null);

  //cuộn xuống cuối trang khi có tin nhắn mới
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loadingData]);

  //logic:
  //người dùng gửi yêu cầu
  //AI trả về dữ liệu
  // hiện mô tả yêu cầu kèm theo danh sách có liên kết đến trang sản phẩms
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");
    setLoadingData(true);

    // Mô phỏng delay để hiển thị loading
    setTimeout(async () => {
      const products = await mockProducts(userMessage);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `Gợi ý sản phẩm theo yêu cầu "${userMessage}"`,
          products,
        },
      ]);
      setLoadingData(false);
    }, 1000);
  };

  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="flex gap-3 p-3 border rounded-xl animate-pulse bg-muted/30"
      >
        <Skeleton className="w-16 h-16 rounded-md bg-muted" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-3/4 bg-muted" />
          <Skeleton className="h-3 w-full bg-muted" />
          <Skeleton className="h-4 w-1/3 bg-muted" />
        </div>
      </div>
    ));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 p-5! text-lg">
            <BotMessageSquare className="w-5! h-5!  md:w-7! md:h-7!" />
            Chat AI tư vấn
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-96 p-0 border  shadow-xl border-green-300"
          sideOffset={8}
          align="end"
        >
          <Card className="flex flex-col max-h-[80vh] rounded-xl pt-0! pb-2!">
            <div className="p-3 text-sm font-medium border-b bg-gray-100">
              Antoree AI tư vấn sản phẩm
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-4 text-sm max-h-[60vh]">
              {messages.map((msg, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className={`px-3 py-2 rounded-lg whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-blue-100 text-right ml-auto"
                        : "bg-gray-100 text-left mr-auto"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.from === "bot" && msg.products && (
                    <div className="space-y-3">
                      {msg.products.map((p) => (
                        <a
                          key={p.id}
                          href={`/san-pham/${p.id}`}
                          className="block border rounded-xl overflow-hidden hover:shadow-md transition"
                        >
                          <div className="flex gap-3 p-3">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex flex-col justify-between">
                              <h4 className="font-semibold text-sm">
                                {p.name}
                              </h4>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {p.shortDescription}
                              </p>
                              <span className="text-primary font-bold text-sm">
                                {p.price.toLocaleString()}₫
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {loadingData && renderSkeletons()}

              {/* cuộn đến cuối trang khi có tin nhắn mới */}
              <div ref={chatEndRef} />
            </div>

            <div className="flex gap-2 p-3 border-t">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Nhập yêu cầu..."
              />
              <Button
                onClick={handleSend}
                className="bg-green-600 hover:bg-green-700"
              >
                Gửi
              </Button>
            </div>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}

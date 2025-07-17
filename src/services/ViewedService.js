class ViewedService {
  get() {
    let stored = localStorage.getItem("viewedProducts");
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  }

  post(product) {
    try {
      const existing = JSON.parse(localStorage.getItem("viewedProducts")) || [];

      // Xoá nếu đã tồn tại để đẩy lên đầu danh sách
      const filtered = existing.filter((p) => p.id !== product.id);

      const updated = [product, ...filtered].slice(0, 6); // Giới hạn 6 sản phẩm

      localStorage.setItem("viewedProducts", JSON.stringify(updated));
    } catch (error) {
      console.error("Lỗi khi lưu lịch sử xem:", error);
    }
  }
}

export default new ViewedService();

import api from "./axios";

class ProductService {
  get(params = {}) {
    return api.get("/products", { params });
  }

  getById(id) {
    return api.get(`/products/${id}`);
  }

  post(data) {
    return api.post("/products", data);
  }

  put(id, data) {
    return api.put(`/products/${id}`, data);
  }

  delete(id) {
    return api.delete(`/products/${id}`);
  }
}

export default new ProductService();

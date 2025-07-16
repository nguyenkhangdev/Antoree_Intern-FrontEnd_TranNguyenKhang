import api from "./axios";

class ProductService {
  get(params = {}) {
    return api.get("/suggestions", { params });
  }
}

export default new ProductService();

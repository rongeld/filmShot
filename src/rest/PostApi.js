import Api from 'rest/Api';

class ProductsAPI {
  static async create(data) {
    const formData = new FormData();
    for (const i in data) {
      formData.append(i, data[i]);
    }

    const response = await Api.post('/posts', formData, false, true);
    return response;
  }

  static async createComment(data) {
    const response = await Api.post('/comments', data);
    return response;
  }

  static async get() {
    const response = await Api.get('/posts?sort=-createdAt');
    return response;
  }

  static async delete(id) {
    const response = await Api.delete(`/posts/${id}`);
    return response;
  }

  static async likeUnlike({ status, id }) {
    const response = await Api.post(
      `/posts/${status ? 'unlike' : 'like'}/${id}`
    );
    return response;
  }
}

export default ProductsAPI;

import Api from 'rest/Api';

class ProductsAPI {
  static async getConversations() {
    const response = await Api.get('/messages/conversations');
    return response;
  }

  static async getDialog(id) {
    const response = await Api.get(
      `/messages/conversations/query?userId=${id}`
    );
    return response;
  }

  static async sendMessage(body) {
    const response = await Api.post(`/messages`, body);
    return response;
  }
}

export default ProductsAPI;

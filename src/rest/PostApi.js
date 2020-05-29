import axios from 'axios';
import getToken from 'utils/getToken';

class ProductsAPI {
  static async create(data) {
    const token = await getToken();
    const formData = new FormData();
    for (const i in data) {
      formData.append(i, data[i]);
    }
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/posts`,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return result;
  }

  static async get() {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API}/posts?sort=-createdAt`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }
}

export default ProductsAPI;

import axios from 'axios';
import getToken from 'utils/getToken';

class Api {
  static async get(query) {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API}${query}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }

  static async post(query, data, isToken, isFormData) {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_API}${query}`,
      data
    };
    if (!isToken) {
      const token = await getToken();
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    if (isFormData) {
      config.config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };
    }
    const response = await axios(config);
    return response.data;
  }

  static async delete(query) {
    const token = await getToken();
    const response = await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API}${query}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }

  static async patch(query, data, isToken, isFormData) {
    const config = {
      method: 'patch',
      url: `${process.env.REACT_APP_API}${query}`,
      data
    };
    if (!isToken) {
      const token = await getToken();
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    if (isFormData) {
      config.config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };
    }

    const response = await axios(config);
    return response.data;
  }
}

export default Api;

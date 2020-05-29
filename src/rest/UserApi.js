import axios from 'axios';

class UserAPI {
  static async signIn(data) {
    const response = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/users/login`,
      data
    });
    return response;
  }

  static async signUp(data) {
    const response = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/users/signup`,
      data
    });
    return response;
  }

  static async updateMe(data) {
    const response = await axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API}/users/updateMe`,
      data,
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    });
    return response;
  }
}

export default UserAPI;

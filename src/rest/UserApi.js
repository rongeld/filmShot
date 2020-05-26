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
}

export default UserAPI;

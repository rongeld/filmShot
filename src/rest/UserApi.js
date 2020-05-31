import Api from 'rest/Api';

class UserAPI {
  static async signIn(data) {
    const response = await Api.post('/users/login', data, true);
    return response;
  }

  static async signUp(data) {
    const response = await Api.post('/users/signup', data, true);
    return response;
  }

  static async updateMe(data) {
    const formData = new FormData();
    for (const i in data) {
      formData.append(i, data[i]);
    }
    const response = await Api.patch('/users/updateMe', formData, false, true);
    return response;
  }

  static async getSingleUser(id) {
    const response = await Api.get(`/users/${id}`);
    return response;
  }
}

export default UserAPI;

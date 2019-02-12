import config from '../config/appconfig.js';

const userService = {
  getAllUser: () => {
    const url = config.mainApi + '/users';
    return fetch(url).then(res => {
      return res.json();
    });
  }
}

export default userService;
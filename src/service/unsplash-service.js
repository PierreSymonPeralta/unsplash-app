import config from '../config/appconfig.js'
import { addMobileSize } from './helpers';
const ACCESS_KEY ='7d49b27694aa9bed64615e174f9453749aa3824cdcd3d07461315f1c1a7f9c3d'
const SECRET_KEY ='a8f8e0ee305e9d98786aa33b2e0a987651490cda176515368f046fe4f198b64d'

const unsplashService = {

  getAllPhoto: (page = 0) => {
    const url = config.unsplashAPI + `?client_id=${ACCESS_KEY}&page=${page}&per_page=30`;
    return fetch(url).then(res => {
      return res.json();
    }).then(addMobileSize);
  },

  searchPhoto: (query = '') => {
    const url = config.unsplashAPI + `?client_id=${ACCESS_KEY}&query=${query}`;
    return fetch(url).then(res => {
      return res.json();
    });
  },

  getRandomPhoto: () => {
    const url = config.unsplashAPI + `/random?client_id=${ACCESS_KEY}`;
    return fetch(url).then(res => {
      return res.json();
    });
  }

}
export default unsplashService;
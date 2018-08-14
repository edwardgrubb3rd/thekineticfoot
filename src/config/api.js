import axios from 'axios';

export default class api {
  static getData(url) {
    return axios.get(url).then(res => res);
  }
}

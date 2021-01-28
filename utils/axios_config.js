import Axios from 'axios';

const createAxiosClient = () => {
  let url = 'http://localhost:3000';
  const options = {
    baseURL: url,
  };
  return Axios.create(options);
};

export default createAxiosClient;
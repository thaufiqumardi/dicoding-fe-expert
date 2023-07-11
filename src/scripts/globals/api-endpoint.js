import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANTS: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMG: {
    S: (id) => `${CONFIG.BASE_URL}/images/small/${id}`,
    M: (id) => `${CONFIG.BASE_URL}/images/medium/${id}`,
    L: (id) => `${CONFIG.BASE_URL}/images/large/${id}`,
  },
};

export default API_ENDPOINT;

import API_ENDPOINT from '../globals/api-endpoint';

class RestarurantsSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestarurantsSource;

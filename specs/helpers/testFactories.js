import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';

export const likeRestaurantPresenter = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

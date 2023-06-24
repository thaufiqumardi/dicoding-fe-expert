import FavoriteRestoIdb from '../src/scripts/data/favourite-restos-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Remove a resto from favourite', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unlike component when the resto has been liked', async () => {
    await TestFactories.likeRestaurantPresenter({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]'),
    ).toBeTruthy();
  });

  it('should not display like component when the resto has been liked', async () => {
    await TestFactories.likeRestaurantPresenter({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.likeRestaurantPresenter({ id: 1 });
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.likeRestaurantPresenter({ id: 1 });
    await FavoriteRestoIdb.deleteResto(1);
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});

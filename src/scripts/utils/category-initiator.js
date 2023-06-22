import { createRestaurantCategoryTemplate } from '../views/template-creator';

const CategoryRestaurantInitiator = {
  async init({ categoriesContainer, categories }) {
    this._categoriesContainer = categoriesContainer;
    this._categories = categories;
    await this.renderCategory();
  },

  async renderCategory() {
    this._categories.forEach((category) => {
      this._categoriesContainer.innerHTML += createRestaurantCategoryTemplate(category.name);
    });
  },
};

export default CategoryRestaurantInitiator;

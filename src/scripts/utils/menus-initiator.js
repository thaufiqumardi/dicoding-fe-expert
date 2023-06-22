import { createMenuCategoryTemplate, createMenuItemTemplate } from '../views/template-creator';

const MenusRestaurantInitiator = {
  async init({ menusContainer, menus }) {
    this._menusContainer = menusContainer;
    this._menus = menus;
    await this.renderMenus();
  },

  async renderMenus() {
    Object.keys(this._menus).forEach((menuCategory) => {
      this._menusContainer.innerHTML += createMenuCategoryTemplate(menuCategory);
      const menuCardContainer = document.querySelector(`#${menuCategory}`);
      Object.values(this._menus[menuCategory]).forEach((menu) => {
        menuCardContainer.innerHTML += createMenuItemTemplate(menu);
      });
    });
  },
};

export default MenusRestaurantInitiator;

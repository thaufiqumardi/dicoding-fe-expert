import CONFIG from '../globals/config';

export const createRestaurantItemTemplate = (data) => `
  <div class="card">
    <div class="card__image__container" tabindex="0">
      <img src="${CONFIG.BASE_IMAGE_URL(data.pictureId)}" alt="${data.name}" />
      <span>${data.city}</span>
    </div>
    <div class="card__body">
      <div class="card__rating__container" tabindex="0">
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>Rating: ${data.rating}</span>
      </div>
      <h3 tabindex="0"><a href="/#/detail/${data.id}">${data.name}</a></h3>
      <p tabindex="0">${data.description}</p>
    </div>
  </div>`;

export const createEmptyFavouriteResto = () => `
  <div></div>
  <div id="no_favourite_resto">You haven't add your favourite restaurants yet</div>
  <div></div`;

export const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like" tabindex="0">
      <i class="fa fa-regular fa-heart" aria-hidden="true"></i>
  </button>`;

export const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export const createRestaurantDetailTemplate = (data) => `
  <div class="restaurant_detail_container">
    <div class="restaurant_detail_image_container" tabindex="0">
      <img src="${CONFIG.BASE_IMAGE_URL(data.pictureId)}" alt="${data.name}"  />
    </div>
    <div class="restaurant_detail_body">
      <h2 class="restaurant_title" tabindex="0">${data.name}</h2>
      <a class="restaurant_address"  href="https://www.google.com/maps/search/${data.city}+${data.address}" _target="blank"><i class="fa fa-map-marker" aria-hidden="true"></i> ${data.city}, ${data.address}</a>
      <div class="category">
        <p class="categories_label">Categories:</p>
        <div class="categories_container"></div>
      </div>
      <p tabindex="0" class="restaurant_detail_rating"><i class="fa fa-star" aria-hidden="true"></i>Rating: ${data.rating}</p>
      <p class="restaurant_description" tabindex="0">${data.description}</p>
      <div id="menus" class="menus_container" tabindex="0"></div>
      <p class="review_label" tabindex="0">Reviews: </p>
      <div class="customer_reviews_container"></div>
    </div>
  </div>
`;

export const createRestaurantCategoryTemplate = (category) => `<span>${category}</span>`;

export const createMenuCategoryTemplate = (name) => `
<div class="menu_category">
  <p class="title_menu_category">${name}</p>
  <div id="${name}" class="menu_card_container"></div>
</div>`;

export const createMenuItemTemplate = (menu) => `
  <div class="card_menu">
    <img src="${CONFIG.BASE_IMAGE_URL(menu.pictureId)}" alt="${menu.name}"  />
    <div class="card_menu_body">
      <p class="menu_name">${menu.name}</p>
      <p class="menu_price">Rp${menu.price}</p>
      <p class="menu_desc">${menu.description}</p>
    </div>
  </div>
`;

export const createReviewsItemTemplate = (review) => `
  <div class="card_review">
    <div class="card_review_body">
      <div class="card_review_header">
        <p class="review_name">${review.name}</p>
        <p class="review_date">Rp${review.date}</p>
      </div>
      <p class="review_desc">${review.review}</p>
    </div>
  </div>
`;

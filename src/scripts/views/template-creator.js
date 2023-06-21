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

export const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>`;

export const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createMenuTemplate = (menu) => `<p>${menu}</p>`;

export const createRestaurantDetailTemplate = (data) => `
  <div class="restaurant_detail_container">
    <div class="restaurant_detail_image_container">
      <img src="${CONFIG.BASE_IMAGE_URL(data.pictureId)}" alt="${data.name}"  />
    </div>
    <div class="restaurant_detail_body">
      <h2 class="restaurant_title">${data.name}</h2>
      <a href="https://www.google.com/maps/search/${data.city}+${data.address}" _target="blank"><i class="fa fa-map-marker" aria-hidden="true"></i> ${data.city}, ${data.address}</a>
      <p>Rating: ${data.rating}</p>
      <p>${data.description}</p>
      ${data.menus?.foods.map((item) => createMenuTemplate(item))}
    </div>
  </div>
`;

import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="details">
        <h2 class="details__title">${restaurant.name}</h2>
        <img class="details__poster" src="${CONFIG.BASE_IMAGE_URL}${
  restaurant.pictureId
}" alt="${restaurant.name}" />
        <div class="details__info">
          <h3>Information</h3>
          <h4>Alamat</h4>
          <p>${restaurant.address}</p>
          <h4>Kota</h4>
          <p>${restaurant.city}</p>
          <h4>Rating</h4>
          <p>${restaurant.rating}</p>
        </div>
        <div class="details__overview">
          <h3>Deskripsi</h3>
          <p>
            ${restaurant.description}
          </p>
        </div>

        <div class="details__menu">
          <div class="foods">
            <h3>Makanan</h3>
            <div class="list__foods">
              <p>${restaurant.menus.foods
    .map((food) => food.name)
    .join(' , ')}</p>
            </div>
          </div>
          <div class="drink">
            <h3>Minum</h3>
            <div class="list__foods">
              <p>${restaurant.menus.drinks
    .map((drink) => drink.name)
    .join(' , ')}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="review">
        <h3>Review</h3>
        <div class="reviews">
        ${restaurant.customerReviews
    .map(
      (customer) => `
                        <h4 class="reviews__name">${customer.name}</h4>
                        <p class="reviews__desc">${customer.review}</p>
                        <p class="reviews__date">${customer.date}</p>
                `,
    )
    .join('')}
        </div>
      </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant__list" >
    <article class="restaurant-item">
        <img class="restaurant-item__thumbnail lazyload" width="100%" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="restaurant__city">${restaurant.city}</div>
        <div class="restaurant-item__content">
            <p class="restaurant-item__rate"> Rating ${restaurant.rating}</p>
            <h4 class="restaurant-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h4>
            <p class="restaurant-item__description">${restaurant.description}</p>
        </div>
    </article>
</div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};

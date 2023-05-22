import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant">
          <h3 class="restaurant__label">Favorite Place</h3>
          <div class="restaurants" id="restaurants">
            
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#restaurants');
    restoContainer.innerHTML = '';
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(resto);
    });

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
  },
};

export default Favorite;

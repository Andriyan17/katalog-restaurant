import restaurantData from '../../data/data';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant">
          <h3 class="restaurant__label">Explore Restaurant</h3>
          <div class="restaurants" id="restaurants">
            
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantData.listRestaurants();
    const restoContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(resto);
      // menampilkan list restaurant
    });

    const hero = document.querySelector('.hero');
    hero.style.display = 'flex';
  },
};

export default Home;

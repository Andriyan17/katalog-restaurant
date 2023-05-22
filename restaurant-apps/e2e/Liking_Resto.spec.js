/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Like Restaurant', async ({ I }) => {
  I.waitForVisible('#maincontent');
  I.see('Explore Restaurant', '.restaurant__label');

  I.waitForElement('.restaurant-item__title');

  const firstResto = locate('.restaurant-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForVisible('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__content');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unlike Resto', async ({ I }) => {
  I.waitForVisible('#maincontent');
  I.see('Explore Restaurant', '.restaurant__label');

  I.waitForElement('.restaurant-item__title');
  const firstResto = locate('.restaurant-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForVisible('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForVisible('#maincontent');
  I.see('Favorite Place', '.restaurant__label');
  I.waitForElement('.restaurant-item__content');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(locate('.restaurant-item__title a').first());
  I.waitForVisible('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item__content');
});

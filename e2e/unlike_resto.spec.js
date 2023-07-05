const assert = require('assert');

Feature('Remove Resto from Favourites');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Unliking one resto', async ({ I }) => {
  I.waitForVisible('.card');
  I.seeElement('.card');
  const sampleResto = locate('.card .card__body h3 a').first();
  const sampleRestoTitle = await I.grabTextFrom(sampleResto);
  I.click(sampleResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.card .card__body h3 a');
  const likedRestoTitle = await I.grabTextFrom('.card .card__body h3 a');

  assert.strictEqual(sampleRestoTitle, likedRestoTitle);

  I.click(likedRestoTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see("You haven't add your favourite restaurants yet", '#no_favourite_resto');
});

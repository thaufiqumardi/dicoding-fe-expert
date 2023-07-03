Feature('Favourite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty favourite restos', ({ I }) => {
  I.see("You haven't add your favourite restaurants yet", '#no_favourite_resto');
});

Scenario('liking one resto', async ({ I }) => {
  I.see("You haven't add your favourite restaurants yet", '#no_favourite_resto');
  I.amOnPage('/');

  I.seeElement('.card');

  const sampleResto = locate('.card__body h3 a').first();
  const sampleRestoTitle = await I.grabTextFrom(sampleResto);
  I.click(sampleResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.card__body');
  const likedRestoTitle = await I.grabTextFrom('.card__body');

  assert.strictEqual(sampleRestoTitle, likedRestoTitle);
});

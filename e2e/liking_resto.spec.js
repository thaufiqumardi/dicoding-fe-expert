Feature('Favourite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty favourite restos', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});

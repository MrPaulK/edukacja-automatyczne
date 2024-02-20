const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.automationpractice.pl/index.php", //ADRES
    redirectionLimit: 3,                                   //LIMIT PRZEKIEROWAŃ
    retries: {
      "runMode": 1,   // TESTY NIEWIDOCZNE DLA OKA (TRYB RUN), TO TESTY W TLE PONAWIANE 1 RAZ, GDY BĘDZIE BŁĄD
      "openMode": 1  // EKRANIK, GDZIE MOŻNA WYBRAĆ SOBIE TEST, KTÓRY BĘDZIEMY CHCIELI URUCHOMIĆ - PONOWIĆ 1 RAZ T KTÓRY NIE PRZEJDZIE
    },
    watchForFileChanges: true, // AUTO URUCHOMIENIE TESTU, GDY BYŁO COŚ ZMIENIANE PODCZAS TESTÓW 
    chromeWebSecurity: false,   // STRONA NIE MUSI BYĆ ZABEZPIECZONA
    viewportWidth: 960,
    viewportHeight: 1080,
    waitForAnimations: true,    // GDY NA STRONIE POJAWIAJĄ SIĘ ANIMACJE TO CYPRESS MÓGŁBY WCISNĄĆ PRZYCISK PRZED TYM GDZIE BĘDZIE TO MOŻLIWE
    testIsolation: false,       // PRZY KAŻDYM NOWYM TEŚCIE NOWY WĄTEK, NOWE OKNO. NA CZAS NAUKI FALSE
    theme: "dark"
  },
});

const fs = require('fs');
let html = fs.readFileSync('public/landing-pages/kage.html', 'utf8');

const card3Start = html.indexOf('<article class="card" data-rv="up" data-view="2"');
const card3End = html.indexOf('</article>', card3Start) + 10;
const card3 = html.substring(card3Start, card3End);

const card4 = card3
  .replace('data-view="2"', 'data-view="3"')
  .replace('Medi plus', 'Aura-E commerce')
  .replace('Python', 'Dashboard')
  .replace('Appointments', 'Tracking & Sales')
  .replace('03 / 03', '04 / 04');

html = html.replace(card3, card3 + '\n    ' + card4);
html = html.replace('01 / 03', '01 / 04').replace('02 / 03', '02 / 04').replace('03 / 03', '03 / 04');

fs.writeFileSync('public/landing-pages/kage.html', html);

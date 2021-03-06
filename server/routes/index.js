const root = require('./root');
const chartsy = require('./chartsy');
const imageGallery = require('./imageGallery');

module.exports = (app) => {
  app.use('/chartsy', chartsy);
  app.use('/image-gallery', imageGallery);
  app.use('/', root);
}
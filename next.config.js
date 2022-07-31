const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    handleImages: ['jpg', 'jpeg', 'png'],
  }],

  // your other plugins here

], {
  reactStrictMode: true,
});
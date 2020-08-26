const withSass = require('@zeit/next-sass');
const withPWA = require('next-pwa');

if (process.env.NODE_ENV === 'development') {
  module.exports = withSass({
    env: {
      SECRET: '84f929ab-2819-4f37-aa1f-98e4d7cae451',
      SECRET_SHA: '0e259e21-dce4-4d39-b37d-d183deee828e',
      ROOT_URL: 'https://f2i-dev18-km-jl-js-gg.herokuapp.com'
    },
    pwa: {
      dest: 'public'
    }
  });
} else {
  module.exports = withPWA(
    withSass({
      env: {
        SECRET: '84f929ab-2819-4f37-aa1f-98e4d7cae451',
        SECRET_SHA: '0e259e21-dce4-4d39-b37d-d183deee828e'
      },
      pwa: {
        dest: 'public'
      }
    })
  );
}

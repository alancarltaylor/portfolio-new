'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Raas App',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'angular',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.googleapis.com/alan_portfolio/Thumbs/smud_thumb.jpg',
        }),
        knex('projects').insert({
          id: 2,
          name: 'Shopify Stores',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'ecommerce',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.googleapis.com/alan_portfolio/Thumbs/shopify_thumb.jpg',
        }),
        knex('projects').insert({
          id: 3,
          name: 'Smud Services App',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'web',
          role: 'angular',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.googleapis.com/alan_portfolio/Thumbs/smud_service_thumb.jpeg',
        }),
        knex('projects').insert({
          id: 4,
          name: 'SVG Renderer',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'data-vis',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/svg-logo-text.png',
        }),
        knex('projects').insert({
          id: 5,
          name: 'Insights Explore',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'data-vis',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/bars-chart.svg',
        }),
        knex('projects').insert({
          id: 6,
          name: 'Engage Components',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'react',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/utilities.svg',
        }),
        knex('projects').insert({
          id: 7,
          name: 'CLI Portfolio',
          brief: 'Legacy portfolio site, built to look and function like a CLI.',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'angular',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: 'http://alancarltaylor.com',
          thumbnail: 'https://portfolio-alan.s3-us-west-1.amazonaws.com/legacyPortfolio.svg',
        }),
        knex('projects').insert({
          id: 8,
          name: 'Vidiot',
          brief: 'Browse Reddit like a TV! Select a sort, sub, and enjoy scrolling the curated videos Reddit\'s API provides',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'angular',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: 'https://vidiot.herokuapp.com',
          thumbnail: 'https://portfolio-alan.s3-us-west-1.amazonaws.com/vidiot.png',
        }),
        knex('projects').insert({
          id: 9,
          name: 'Birth Death Rebirth',
          brief: 'Discover your past 5 lives with this handy reincarnation app!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'javascript',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: 'https://reincarnation.herokuapp.com ',
          thumbnail: 'https://portfolio-alan.s3-us-west-1.amazonaws.com/reincarnation.png',
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))");
    });
};

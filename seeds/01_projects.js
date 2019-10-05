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
          type: 'web',
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
          type: 'web',
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
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.googleapis.com/alan_portfolio/Thumbs/smud_service_thumb.jpeg',
        }),
        knex('projects').insert({
          id: 4,
          name: 'SVG Renderer',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'web',
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
          type: 'web',
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
          type: 'web',
          role: 'Front End Developer',
          date: '[TBD]',
          live_link: '[TBD]',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/utilities.svg',
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))");
    });
};

'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Name of project here
        knex('images').insert({
          project_id: 1,
          image_url: 'https://storage.googleapis.com/alan_portfolio/Raas%20App/Screen%20Shot%202019-09-28%20at%204.44.28%20PM.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://storage.googleapis.com/alan_portfolio/Raas%20App/Screen%20Shot%202019-09-28%20at%204.44.45%20PM.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://storage.googleapis.com/alan_portfolio/Shopify%20Stores/ShopifyStore.gif'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://storage.cloud.google.com/alan_portfolio/SVG%20Renderer/SVGRenderer.gif'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://storage.cloud.google.com/alan_portfolio/Insights%20Explore/InsightsExplore.gif'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://storage.cloud.google.com/alan_portfolio/Engage%20Components/EngageComponents.gif'
        }),
        knex('images').insert({
          project_id: 3,
          image_url: 'https://storage.cloud.google.com/alan_portfolio/Smud%20Services%20App/Services-app-demo.gif'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://storage.cloud.google.com/alan_portfolio/PersonalProjects/legacyCLI.gif'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://storage.cloud.google.com/alan_portfolio/PersonalProjects/vidiot.gif'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://storage.cloud.google.com/alan_portfolio/PersonalProjects/reincarnation1.gif'
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('images_id_seq', (SELECT MAX(id) FROM images))");
    });
};

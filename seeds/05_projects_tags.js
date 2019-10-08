'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_tags').del()
    .then(function () {
      return Promise.all([
        // Sample Project
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 1 // JS
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 2 // htmlcss
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 4 // galvanize
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 13
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 16
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 17
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 16
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 4
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 17
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 4
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 7
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 13
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 17
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 16
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 4
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 17
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 8
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 12
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 6
        }),
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 4
        }),
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 12
        }),
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 17
        }),
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 6
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 4
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 12
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 17
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 6
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 14
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 18
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 14
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 18
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 3
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 18
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 3
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_tags_id_seq', (SELECT MAX(id) FROM projects_tags))");
    });
};

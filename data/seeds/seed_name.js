/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").del();
  await knex("projects").insert([
    {
      project_id: 1,
      project_name: "sprint1",
      project_description: "first project",
      project_completed: false,
    },
    {
      project_id: 2,
      project_name: "sprint2",
      project_description: "second project",
      project_completed: false,
    },
    {
      project_id: 3,
      project_name: "sprint3",
      project_description: "third project",
      project_completed: false,
    },
  ]);
};

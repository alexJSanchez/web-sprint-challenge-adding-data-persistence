/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("project").del();
  await knex("project").insert([
    {
      project_id: 1,
      project_name: "sprint1",
      project_description: "first project",
      project_completed: false,
    },
  ]);
};

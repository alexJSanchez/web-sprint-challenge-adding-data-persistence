/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("project_id").notNullable;
    table.string("project_name", 100).notNullable;
    table.string("project_description");
    table.boolean("project_completed");
  });
  await knex.schema.createTable("resources", (table) => {
    table.increments("resource_id").notNullable;
    table.string("resource_name").notNullable().unique();
    table.string("resource_description");
  });
  await knex.schema.createTable("tasks", (table) => {
    table.increments("task_id").notNullable;
    table.string("task_description").notNullable;
    table.string("task_notes");
    table.string("task_completed");
    table.string("project_id").notNullable;
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project");
};

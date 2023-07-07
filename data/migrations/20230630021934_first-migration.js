/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("project_id").notNullable();
    table.string("project_name", 100).notNullable();
    table.string("project_description");
    table.boolean("project_completed");
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("resource_id").notNullable();
    table.string("resource_name").notNullable().unique();
    table.string("resource_description");
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("task_id").notNullable();
    table.string("task_description").notNullable();
    table.string("task_notes");
    table.boolean("task_completed").defaultTo(false);
    table
      .integer("project_id")
      .unsigned()
      .references("project_id")
      .inTable("projects")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects"),
    await knex.schema.dropTableIfExists("resources"),
    await knex.schema.dropTableIfExists("tasks");
};

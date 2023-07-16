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
			project_name: "Gamer oculus vision",
			project_description: "using oculus for gamers",
			project_completed: false,
		},
		{
			project_id: 2,
			project_name: "Build game",
			project_description: "game development",
			project_completed: false,
		},
	]);
	await knex("resources").del();
	await knex("resources").insert([
		{
			resource_id: 1,
			resource_name: "oculus resource",
			resource_description: "this is resource for oculus",
		},
		{
			resource_id: 2,
			resource_name: "development resource",
			resource_description: "this is resource for game dev",
		},
	]);
	await knex("tasks").del();
	await knex("tasks").insert([
		{
			task_description: 1,
			task_notes: "installing oculus",
			task_completed: false,
			project_id: 1,
		},
		{
			task_description: 2,
			task_notes: "game development notes",
			task_completed: false,
			project_id: 2,
		},
	]);
};

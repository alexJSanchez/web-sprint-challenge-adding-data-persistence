// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */

// exports.seed = async function (knex) {
// 	// Deletes ALL existing entries
// 	await knex("projects").del();
// 	await knex("projects").insert([
// 		{
// 			project_name: "sprint1",
// 			project_description: "first project",
// 			project_completed: false,
// 		},
// 	]);
// 	await knex("resources").del();
// 	await knex("resources").insert([
// 		{
// 			resource_name: "first resource",
// 			resource_description: "descrption",
// 		},
// 	]);
// };

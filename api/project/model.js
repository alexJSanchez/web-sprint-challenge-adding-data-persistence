// build your `Project` model here

const db = require("../../data/dbConfig");

const getAll = () => {
	// DO YOUR MAGIC
	return db("projects").then((projects) =>
		projects.map((proj) => ({
			...proj,
			project_completed: proj.project_completed ? true : false,
		}))
	);
};
const createProject = async (project) => {
	const createProject = await db("projects")
		.insert(project)
		.returning("*")
		.then((projects) =>
			projects.map((proj) => ({
				...proj,
				project_completed: proj.project_completed ? true : false,
			}))
		);

	return createProject;
};
module.exports = { getAll, createProject };

// const createProject = (project) => {
// 	return db("projects")
// 		.insert(project, "project_id")
// 		.then(([project_id]) => db("projects").where({ project_id }))
// 		.then(([proj]) => ({
// 			...proj,
// 			project_completed: proj.project_completed ? true : false,
// 		}));
// };

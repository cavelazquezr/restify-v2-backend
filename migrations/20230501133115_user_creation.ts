import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	const currentTimestamp = knex.raw("current_timestamp");

	await knex.schema.createSchemaIfNotExists("auth");
	await knex.schema.withSchema("auth").createTable("users", (table) => {
		table.text("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
		table.text("email").notNullable();
		table.text("firstname").notNullable();
		table.text("lastname").notNullable();
		table.text("password").notNullable();
		table.text("avatar");
		table.dateTime("created_at").defaultTo(currentTimestamp);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropSchema("conf", true);
}

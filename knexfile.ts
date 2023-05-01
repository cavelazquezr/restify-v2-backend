import { Knex } from "knex";
import { retrieveConnDetails } from "./src/services/postgres";

module.exports = async (): Promise<Knex.Config> => {
	return {
		client: "postgresql",
		connection: await retrieveConnDetails(),
	};
};

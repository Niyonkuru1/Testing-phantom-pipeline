/** @format */

import { Pool } from "pg";

const pool = new Pool({
	host: "localhost",
	user: "postgres",
	port: "5432",
	password: "elite",
	database: "postgres",
});
export default pool;

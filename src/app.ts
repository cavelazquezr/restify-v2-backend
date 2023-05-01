import express, { Application } from "express";
import bodyParser from "body-parser";
import openapi from "../tsoa/swagger.json";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { RegisterRoutes } from "../tsoa/routes";

export const app: Application = express();

app.use(cors({ origin: /^https?:\/\/localhost:[\d]*/ }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({ msg: "Welcome to your first API" });
});

RegisterRoutes(app);

// Docs endpoints
app.get("/openapi", (req, res) => res.send(openapi));
app.use(
	"/docs",
	swaggerUi.serve,
	swaggerUi.setup(openapi, {
		customCss: ".swagger-ui .topbar { display: none }",
		customSiteTitle: "dhub API",
		customfavIcon: "../static/favicon.png",
		swaggerOptions: {
			defaultModelsExpandDepth: -1,
		},
	}),
);

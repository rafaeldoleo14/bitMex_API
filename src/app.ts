import express from "express";
import morgan from "morgan";
import router from "./routes/announcement.route";
import cors from "cors";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Express application
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // to catch data

// Routes
app.use("/api/announcement", router);

// PORT config
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

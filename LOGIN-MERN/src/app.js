import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js';
import taskRouter from './routes/task.routes.js';
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser()); // par amanejar y acceder de forma mas sencila a las cookes
app.use("/api",authRoutes);
app.use("/api",taskRouter);
export default app;
import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

// TODO: Add Socket io to the server
// TODO: Configure this server for deployment

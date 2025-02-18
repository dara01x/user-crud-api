import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { error } from "console";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

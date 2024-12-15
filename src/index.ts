import express from "express";
import cors from "cors";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = parseInt(process.env.EXPRESS_PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

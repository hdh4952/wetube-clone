import "dotenv/config";
import "./db";
import Video from "./models/Video";
import User from "./models/User";
import app from "./server";

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}`)
);

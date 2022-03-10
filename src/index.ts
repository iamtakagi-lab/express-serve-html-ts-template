import express from "express";
import path from "path"

const app = express();

app.get("/test", async (req, res, next) => {
  res.json({"status": "ok"})
});

app.use(express.static(path.resolve(__dirname, "..", "public")));
app.listen(process.env.PORT || 8080);
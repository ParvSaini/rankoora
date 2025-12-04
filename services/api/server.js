const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "rankoora-api", timestamp: new Date().toISOString() });
});

app.listen(4000, () => console.log("Rankoora API running on port 4000"));

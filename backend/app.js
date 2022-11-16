const express = require("express");

const app = express();

app.use("/api/files", require("./routes/file-routes"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server started on port " + port);
});

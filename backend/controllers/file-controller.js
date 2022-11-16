const fs = require("fs");
const path = require("path");

exports.getFileContent = (req, res) => {
  const { filename } = req.params;

  const data = fs
    .readFileSync(path.join(__dirname, "..", "public", filename + ".js"))
    .toString();
  // const data = fs.readFileSync(`${__dirname}/public/${filename}.js`);
  res.json({ success: true, data });
};

exports.uploadFile = (req, res) => {
  res.json({ success: true, msg: "Uploaded!" });
};

exports.updateFile = (req, res) => {};

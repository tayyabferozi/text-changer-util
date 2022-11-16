const router = require("express").Router();
const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "text/javascript") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname
      // new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const uploadFile = multer({
  fileFilter,
  storage: fileStorage,
}).single("file");

const filesControllers = require("../controllers/file-controller");

router.get("/:filename", filesControllers.getFileContent);

router.post("/", uploadFile, filesControllers.uploadFile);

router.patch("/:filename", filesControllers.updateFile);

module.exports = router;

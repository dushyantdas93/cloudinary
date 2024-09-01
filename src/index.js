import express from "express";
import { upload } from "./middleware/multerMiddleware.js";
import { uploadToCloudinary } from "./config/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
const app = express();

cloudinary.config({
  cloud_name: "dbrpqazmg",
  api_key: "353992128677736",
  api_secret: "88hSctP-qJYVGITNhyRWI9cXOpU",
});

app.post("/update/profile", upload.single("dp"), (req, res, next) => {
  console.log("file---->", req.file);
  uploadToCloudinary(req.file.path);
  return res.json({ message: "hiiii" });
});

app.listen(9000, () => console.log("listening ..." + 9000));

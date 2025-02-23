import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

export async function uploadToCloudinary(filepath) {
  try {
    if (!filepath) {
      return null;
    }

    const response = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });
    console.log("file uploadedd on cloudingaknmas", response.url);
    await fs.unlink(filepath);
    return response.url;
  } catch (error) {
    console.error("Error uploading file:", error);

    // If there's an error, attempt to delete the file if it exists
    try {
      await fs.unlink(filepath);
      console.log("File deleted from server after upload error.");
    } catch (unlinkError) {
      console.error("Error deleting file:", unlinkError);
    }

    return null;
  }
}

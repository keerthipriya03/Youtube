import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null    
        // upload the file on cloudinary and get the url of the uploaded file
        const response = await cloudinary.uploader.upload(localFilePath, {
            // folder: "uploads",
            resource_type: "auto",
        })
        // file has been updated successfully, // remove it from the server
        console.log("Cloudinary response:", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the file from the server (locally saved temporary file) as upload operation got failed
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
}

export {uploadCloudinary}

// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag",
//     {
//         public_id: "olympic_flag",
//     },
//     function(error, result) {console.log(result);}
// );
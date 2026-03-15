import multer from 'multer';

const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    destination: function (req, file, cb)  {
        cb(null, './public/temp');
    },
    filename: (req, file, cb) => {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
        cb(null.file.originalname) // use the original file name as the name of the file saved on the server
    }
});

export const upload = multer({ storage: storage });

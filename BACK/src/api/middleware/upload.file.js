const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const {CoudinaryStorage, CloudinaryStorage}= require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params: {
        folder: 'img',
        allowefFormats: ["jpg", "png", "jpge", "svg", "gif"]
    }
});

const upload = multer ({storage});
module.exports = upload;
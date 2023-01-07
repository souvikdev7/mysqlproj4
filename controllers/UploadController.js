const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    var fileData = file.originalname.split('.');
    cb(null,  uniqueSuffix+'_'+file.fieldname+'.'+fileData[1]);
  }
});

const fileFilter = (req, file, cb)=>{
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}

const upload = multer({
    storage: storage,
    limits : {
      fileSize : 1024 * 1024 * 5 // in bytes , 5 mb
     },  
     fileFilter : fileFilter
 });



const imageUpload = (req, res, next) => {
  if(Boolean(req.file))
  {
    console.log(req.file);
    res.json({ message : "File Uploaded Successfully"});
    //file path to be stored in db
    //req.file.path 
  }
  else {
    console.log("unable to upload file");
  }
}


module.exports = {upload,imageUpload};
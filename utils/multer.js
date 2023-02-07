import multer from 'multer';
import * as path from 'path';

const multerConfig = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let fileType = path.extname(file.originalname);
    if (fileType !== '.jpg' && fileType !== '.jpeg' && fileType !== '.png') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  },
});

export default multerConfig;

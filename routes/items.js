import { Router } from 'express';
import multer from 'multer';

import {
  addItem,
  getItems,
  updateItem,
  deleteItem,
  getItem,
} from '../controllers/items-controller.js';

//MULTER SETUP

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'frontend/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//ROUTERS
const router = Router();

router.post('/', upload.single('image'), addItem);
router.get('/', getItems);
router.delete('/:id', deleteItem);
router.put('/:id', upload.single('image'), updateItem);
router.get('/:id', getItem);

export default router;

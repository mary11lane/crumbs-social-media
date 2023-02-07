import { Router } from 'express';
import upload from '../utils/multer.js';

import {
  addItem,
  getItems,
  updateItem,
  deleteItem,
  getItem,
} from '../controllers/items-controller.js';

//ROUTERS
const router = Router();

router.post('/', upload.single('image'), addItem);
router.get('/', getItems);
router.delete('/:id', deleteItem);
router.put('/:id', upload.single('image'), updateItem);
router.get('/:id', getItem);

export default router;

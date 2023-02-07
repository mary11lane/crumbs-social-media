import Item from '../models/Item.js';
import cloudinary from '../utils/cloudinary.js';

export const addItem = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const item = new Item({
      username: req.body.username,
      image: result.secure_url,
      // image: req.file.originalname,
      cloudinary_id: result.public_id,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
    });

    const addedItem = await item.save();
    res.status(201).json(addedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, {
      username: req.body.username,
      image: req.file.originalname,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
    });

    res.send('Update successful');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    await cloudinary.uploader.destroy(item.cloudinary_id);
    res.send('item deleted');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

import Item from '../models/Item.js';

export const addItem = async (req, res) => {
  const item = new Item({
    username: req.body.username,
    image: req.file.originalname,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  });
  try {
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

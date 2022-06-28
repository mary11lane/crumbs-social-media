import mongoose from 'mongoose';

const { model } = mongoose;

const requiredItems = {
  type: String,
  required: true,
};

export default model('Item', {
  username: requiredItems,
  image: requiredItems,
  title: requiredItems,
  description: requiredItems,
  category: requiredItems,
  date: {
    type: Date,
    default: Date.now,
  },
});

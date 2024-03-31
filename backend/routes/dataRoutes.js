import express from 'express';
import DataModel from '../models/DataModel.js';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));

const router = express.Router();

// Create a new entry
router.post('/createEntry', async (req, res) => {
  try {
    const newData = new DataModel(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all entries
router.get('/getEntries', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an entry
router.put('/updateEntry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await DataModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an entry
router.delete('/deleteEntry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await DataModel.findByIdAndDelete(id);
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

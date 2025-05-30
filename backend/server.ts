import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (_req, res) => {
  res.send('API running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

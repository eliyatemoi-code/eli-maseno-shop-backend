const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mpesaRoutes = require('./routes/mpesa');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/mpesa', mpesaRoutes);

app.get('/', (req, res) => {
  res.send('ELI MASENO SHOP API is running live! 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
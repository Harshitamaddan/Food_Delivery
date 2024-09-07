const express = require('express');
const app = express();
const connectDB = require('./db/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', userRoutes);

app.listen(3001, () => {
    console.log(`Server started`);
});
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes')

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/auth/users', authRoutes);

// Test database connection and sync
(async () => {
  try {
    await sequelize.sync(); // Sync all defined models to the DB
    console.log('Database synced successfully.');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
})();

module.exports = app;

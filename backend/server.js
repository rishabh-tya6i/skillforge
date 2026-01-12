require('dotenv').config();
const http = require('http');
const app = require('./src/app');
const connectDB = require('./src/database/db');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Connect to Database and start server
connectDB().then(() => {
    server.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection failed', err);
    process.exit(1);
});

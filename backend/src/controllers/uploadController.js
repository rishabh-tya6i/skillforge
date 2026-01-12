const path = require('path');

const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Return the URL to access the file
    // The server is serving 'uploads' folder at root '/uploads' path
    // Full URL construction might differ based on deployment, but for now relative path or absolute path from server root works.
    // Let's return the relative path that the frontend can append to the BASE_URL or just use as is if proxy is set.
    // Actually, usually we return `/${req.file.path}` but path uses system separators.
    
    const filePath = `/uploads/${req.file.filename}`;

    res.status(200).json({
        message: 'File uploaded successfully',
        url: filePath
    });
};

module.exports = { uploadFile };

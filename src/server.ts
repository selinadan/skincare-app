import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Serve index.html for all routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

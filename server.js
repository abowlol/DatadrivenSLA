const express = require('express');
const app = express();
const port = 3001;  // Different from React's default 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is a new message from your backend!');
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

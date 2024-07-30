
const express = require('express');
const shapesRouter = require('./routes/shapes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/shapes', shapesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

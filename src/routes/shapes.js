
const express = require('express');
const { isPointInRectangle, isPointInCircle } = require('../utils/geometry');

const router = express.Router();


router.post('/rectangle', (req, res) => {
    const { point, rectangle } = req.body;
    if (!point || !rectangle) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = isPointInRectangle(point, rectangle);
    res.json({ inside: result });
});


router.post('/circle', (req, res) => {
    const { point, circle } = req.body;
    if (!point || !circle) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = isPointInCircle(point, circle);
    res.json({ inside: result });
});

module.exports = router;

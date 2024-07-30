
function isPointInRectangle(point, rectangle) {
    const { x, y } = point;
    const { x: rectX, y: rectY, width, height } = rectangle;
    return (
        x >= rectX &&
        x <= rectX + width &&
        y >= rectY &&
        y <= rectY + height
    );
}


function isPointInCircle(point, circle) {
    const { x, y } = point;
    const { x: centerX, y: centerY, radius } = circle;
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    return distance <= radius;
}

module.exports = { isPointInRectangle, isPointInCircle };

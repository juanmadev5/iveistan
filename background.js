function getRandomColor() {
    const colors = ['#8a2be2', '#800080', '#E91E63'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
function changeBackgroundColor() {
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}
setInterval(changeBackgroundColor, 5000);
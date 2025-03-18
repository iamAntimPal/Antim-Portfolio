// Define the canvas and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define the size of each block and the initial snake position
const blockSize = 20;
let snake = [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 }
];

// Initial movement direction
let dx = 0;
let dy = -1;

// Main game loop
function main() {
    moveSnake();
    drawGame();
    setTimeout(main, 100); // Adjust speed here (lower is faster)
}

// Move the snake based on current direction
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); // Add new head
    snake.pop(); // Remove tail
}

// Draw the game
function drawGame() {
    // Clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    ctx.fillStyle = '#4caf50';
    snake.forEach(part => {
        ctx.fillRect(part.x * blockSize, part.y * blockSize, blockSize, blockSize);
    });
}

// Event listener for arrow key presses to change direction
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowUp' && dy !== 1) {
        dx = 0;
        dy = -1;
    } else if (key === 'ArrowDown' && dy !== -1) {
        dx = 0;
        dy = 1;
    } else if (key === 'ArrowLeft' && dx !== 1) {
        dx = -1;
        dy = 0;
    } else if (key === 'ArrowRight' && dx !== -1) {
        dx = 1;
        dy = 0;
    }
});

// Start the game loop
main();

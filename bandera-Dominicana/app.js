
document.addEventListener('DOMContentLoaded', () => {
    const clouds = document.querySelectorAll('.cloud');

    clouds.forEach(cloud => {
        let currentPos = Math.random() * 100;
        const speed = Math.random() * 0.1 + 0.05;

        function moveCloud() {
            currentPos += speed;
            if (currentPos > 100) {
                currentPos = -20;
            }
            cloud.style.left = `${currentPos}vw`;
            requestAnimationFrame(moveCloud);
        }

        moveCloud();
    });
});
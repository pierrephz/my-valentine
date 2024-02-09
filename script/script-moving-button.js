document.addEventListener("DOMContentLoaded", function () {
  var moveCount = 0;

  document
    .querySelector(".button-secondary")
    .addEventListener("mouseover", function () {
      if (moveCount < 5) {
        // Randomly position the button on the page
        var newX = Math.random() * (window.innerWidth - this.offsetWidth);
        var newY = Math.random() * (window.innerHeight - this.offsetHeight);

        this.style.position = "absolute"; // Use 'absolute' for free positioning on the page
        this.style.left = newX + "px";
        this.style.top = newY + "px";

        moveCount++; // Increment move count
      } else {
        // Reset move count after 5 hovers to re-enable movement
        moveCount = 0;
      }
    });
});

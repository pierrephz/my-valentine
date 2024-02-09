document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.querySelector(".button-secondary"); // Select the "Hmm, nope" button
  let hoverCounter = 0; // Initialize counter for hover events

  noButton.addEventListener("mouseover", function () {
    // Move the button without limiting the number of times
    // Increase the range for translateX and translateY to make the button move further
    const translateX =
      Math.random() * 200 - 100 + (Math.random() < 0.5 ? -120 : 120); // Random value between -100 and 100 for broader movement, plus a minimum of 100px in either direction
    const translateY =
      Math.random() * 200 - 100 + (Math.random() < 0.5 ? -120 : 120); // Random value between -100 and 100 for broader movement, plus a minimum of 100px in either direction

    // Apply the transformation with increased distance
    noButton.style.transition = "transform 0.5s ease"; // Smooth transition for movement
    noButton.style.transform += ` translate(${translateX}px, ${translateY}px)`;

    hoverCounter++; // Increment the counter with each hover, but it's now only for your reference
  });
});

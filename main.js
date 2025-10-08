const $shareButton = document.querySelector(".share-button");
const $sharePanel = document.querySelector(".share-panel");

/* Toggle the share panel when the button is clicked */
$shareButton.addEventListener("click", (e) => {
  e.stopPropagation();  // Prevents the event from bubbling up to the document

  // Check the current expansion state of the button
  let isExpanded = $shareButton.getAttribute("aria-expanded") === "true";

  // Toggle the aria-expanded attribute (for accessibility)
  $shareButton.setAttribute("aria-expanded", String(!isExpanded));

  // Toggle the visibility of the share panel
  $sharePanel.classList.toggle("share-panel--is-active");
});


/* Close the share panel when clicking outside of it */
document.addEventListener("click", (e) => {

  // Check if the click occurred inside the button or the panel
  const isClickInside = $shareButton.contains(e.target) || $sharePanel.contains(e.target);

  // If the click was outside, close the panel
  if (!isClickInside) {
    $shareButton.setAttribute("aria-expanded", false);
    $sharePanel.classList.remove("share-panel--is-active");
  }
});


/* Close the share panel when pressing the Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $shareButton.setAttribute("aria-expanded", false);
    $sharePanel.classList.remove("share-panel--is-active");
  }
});
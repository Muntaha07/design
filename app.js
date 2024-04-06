const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("load", () => {
  // Animate on page load with a slight delay
  gsap.timeline()
    .staggerFrom(timelineItems, 0.5, {
      opacity: 0,
      y: 50,
      ease: "power3.out"
    })
    .play();
});

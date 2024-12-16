export const scrollToTopSmoothly = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  } else {
    console.error("Window object is not available.");
  }
};

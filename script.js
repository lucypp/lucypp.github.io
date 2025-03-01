document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!"); // Debugging message

  window.addEventListener('scroll', function () {
      // Get the total scrollable height
      const scrollHeight = document.documentElement.scrollHeight;
      // Get the current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Get the viewport height (visible part of the page)
      const windowHeight = window.innerHeight;
      // Calculate the threshold: when the user reaches the bottom 10% of the page
      const threshold = scrollHeight - windowHeight * 1.03;

      console.log("Scroll Position:", scrollTop, "Threshold:", threshold); // Debugging

      // Change background when user nears the bottom
      if (scrollTop >= threshold) {
          document.body.style.backgroundColor = 'black';
      } else {
          document.body.style.backgroundColor = 'white';
      }
  });
});

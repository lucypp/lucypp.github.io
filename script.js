window.addEventListener('scroll', function() {
  // Get the current scroll position from the top of the page
  const scrollPosition = window.scrollY;
  // Define a threshold (in pixels) at which the background will change
  const threshold = 500; // adjust this value as needed

  // Change the background color when the scroll position exceeds the threshold
  if (scrollPosition > threshold) {
    document.body.style.backgroundColor = 'black';
  } else {
    document.body.style.backgroundColor = 'white';
  }
});

window.onload = function () {
    // Play the intro audio when the page loads
    const audio = document.getElementById('intro-audio');
    audio.play();
  
    // Optionally, you can set the audio to loop or adjust volume here
    audio.loop = false; // Set to true if you want the audio to loop
    audio.volume = 0.8; // Adjust volume if needed
  
    // Trigger animations or other JavaScript logic here
  };
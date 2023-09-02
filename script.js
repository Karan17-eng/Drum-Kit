// Create eventListener to all the button 
// All button should be able to play a different sound.
// Function to play the sound when a button is clicked
function playSound(soundURL) {
    const audio = new Audio(soundURL);
    audio.play();
  }
  
  // Add click event listeners to all drum buttons
  const drumButtons = document.querySelectorAll('.drum');
  drumButtons.forEach(button => {
    button.addEventListener('click', function () {
      const buttonKey = this.textContent;
      switch (buttonKey) {
        case 'w':
          playSound('https://files.codingninjas.in/tom-1-28537.mp3');
          break;
        case 'a':
          playSound('https://files.codingninjas.in/tom-2-28541.mp3');
          break;
        case 's':
          playSound('https://files.codingninjas.in/tom-3-28542.mp3');
          break;
        case 'd':
          playSound('https://files.codingninjas.in/tom-4-28543.mp3');
          break;
        case 'j':
          playSound('https://files.codingninjas.in/snare-28545.mp3');
          break;
        case 'k':
          playSound('https://files.codingninjas.in/crash-28546.mp3');
          break;
        case 'l':
          playSound('https://files.codingninjas.in/kick-bass-28547.mp3');
          break;
        default:
          console.log('Invalid key!');
      }
    });
  });
  
  // Add keypress event listener to the document
  document.addEventListener('keypress', function (event) {
    const key = event.key;
    switch (key) {
      case 'w':
        playSound('https://files.codingninjas.in/tom-1-28537.mp3');
        break;
      case 'a':
        playSound('https://files.codingninjas.in/tom-2-28541.mp3');
        break;
      case 's':
        playSound('https://files.codingninjas.in/tom-3-28542.mp3');
        break;
      case 'd':
        playSound('https://files.codingninjas.in/tom-4-28543.mp3');
        break;
      case 'j':
        playSound('https://files.codingninjas.in/snare-28545.mp3');
        break;
      case 'k':
        playSound('https://files.codingninjas.in/crash-28546.mp3');
        break;
      case 'l':
        playSound('https://files.codingninjas.in/kick-bass-28547.mp3');
        break;
      default:
        console.log('Invalid key!');
    }
  });
  
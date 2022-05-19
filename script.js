const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media screen, pass to video element and play
async function selectMedia() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {videoElement.play()};
  } catch (error) {
    console.log(error);
  }
  }

  buttonElement.addEventListener('click', async() => {
    // Disable button
    buttonElement.disabled = true;
    // Start picture and picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    buttonElement.disabled = false;
  });

  // Onload
  selectMedia();

const video = document.getElementById("camera-stream");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing camera:", error);
  });

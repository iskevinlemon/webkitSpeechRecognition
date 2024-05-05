const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const output = document.querySelector("#output");

// Create a speech recognition object
const recognition = new window.webkitSpeechRecognition();
console.log(recognition)

// Set properties for recognition
recognition.continuous = true;
// Set the language to UK
recognition.lang = "en-UK";

startBtn.addEventListener("click", () => {
    recognition.start(); // Start recording when button is clicked
    startBtn.disabled = true; // Disable button while recording

    startBtn.style.display = 'none'; // Hide start button
    stopBtn.style.display = 'inline-block'; // Show stop button

    startBtn.textContent = "Recording...";
});

stopBtn.addEventListener('click', () => {
    recognition.stop(); // Stop recording when button is clicked
    stopBtn.style.display = "none"; // Hide stop button
    startBtn.style.display = "inline-block"; // Show start button
});

// Event listener for when speech is recognized
recognition.onresult = (event) => {
    // Get the recognized speech
    const transcript = event.results[event.results.length - 1][0].transcript; 
    // Display the recognized speech
    output.textContent += transcript; 
};

// Event listener for when recognition ends
recognition.onend = () => {
    startBtn.disabled = false; // Enable button after recording ends
    startBtn.textContent = "Start Recording";
};
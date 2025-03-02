// Relationship Start Date (17th November 2024)
const startDate = new Date("2024-11-17T00:00:00").getTime();

function updateCounter() {
    const now = new Date().getTime();
    const difference = now - startDate;

    // Calculate time parts
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12);
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));

    document.getElementById("counter").innerText = 
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update timer every second
setInterval(updateCounter, 1000);
updateCounter();

// Handle Image Uploads
function uploadImage() {
    const input = document.getElementById("fileInput");
    if (input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            document.getElementById("gallery").appendChild(img);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please select an image to upload.");
    }
}

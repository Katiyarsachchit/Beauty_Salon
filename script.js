// 1. Function to handle Booking Form Submission
function confirmBooking(event) {
    event.preventDefault(); // Prevents page reload

    // Get input values
    const name = document.getElementById('name').value;
    const service = document.getElementById('serviceSelect').value;
    const date = document.getElementById('date').value;

    // Simple validation
    if(name && date) {
        // Show success message
        alert(`✨ Thank you, ${name}! \n\nYour appointment for "${service}" on ${date} has been requested. We will call you shortly to confirm.`);
        
        // Reset the form
        document.getElementById('bookingForm').reset();
    } else {
        alert("Please fill in all details.");
    }
}

// 2. Function to toggle "Before" and "After" images
// We track the state to know if we are currently showing 'before' or 'after'
let imageStates = {}; 

function toggleImage(imgId, afterUrl) {
    const imgElement = document.getElementById(imgId);
    
    // Store the original source (Before image) if not already stored
    if (!imageStates[imgId]) {
        imageStates[imgId] = {
            original: imgElement.src,
            isShowingAfter: false
        };
    }

    const state = imageStates[imgId];

    // Toggle logic
    if (state.isShowingAfter) {
        // Switch back to Before
        imgElement.src = state.original;
        state.isShowingAfter = false;
        // Update button text (optional visual cue)
        event.target.innerText = "See Result";
    } else {
        // Switch to After
        imgElement.src = afterUrl;
        state.isShowingAfter = true;
        // Update button text
        event.target.innerText = "See Before";
    }
}
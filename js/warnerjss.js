
function toggleSearch() {
    var searchInput = document.getElementById("searchInput");
    var searchIcon = document.querySelector(".search-icon i");
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";
    } else {
        searchInput.style.display = "none";
        searchIcon.style.color = "white";
    }
}

// Close search input when clicking outside of it
 // Close search input when clicking outside of it
 document.addEventListener("click", function(event) {
    var searchInput = document.getElementById("searchInput");
    var searchIcon = document.querySelector(".search-icon i");
    if (event.target !== searchInput && event.target !== searchIcon) {
        searchInput.style.display = "none";
        searchIcon.style.color = "white";
    }
});
function openModal(videoUrl) {
    var modal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');
    modalVideo.src = videoUrl; // Set video source
    modal.style.display = 'block'; // Display the modal
}

function closeModal() {
    var modal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');
    modalVideo.pause(); // Pause the video
    modal.style.display = 'none'; // Hide the modal
}

function toggleMenu() {
    var menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu links container
}



//Game
let currentPlayer = 'X';

function makeMove(event) {
    const cell = event.target;
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }


}
//




function openMenu() {
    // Show the side menu
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("overlay").classList.add("active");
    
    // Safety check: Only try to hide the button if it exists on this page
    let btn = document.getElementById("menuBtn");
    if (btn) {
        btn.classList.add("hidden");
    }
}

function closeMenu() {
    // Hide the side menu
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("overlay").classList.remove("active");
    
    // Safety check: Only try to show the button if it exists on this page
    let btn = document.getElementById("menuBtn");
    if (btn) {
        btn.classList.remove("hidden");
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

function highlightCard(card) {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
}
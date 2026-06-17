const API_KEY = "13ac9bfa472af87785dae3ff8a14cf3c";

function searchMovie() {

    const movieName =
        document.getElementById("searchInput").value;

    if (!movieName.trim()) {
        alert("Enter movie name");
        return;
    }

    window.location.href =
        `pages/search.html?query=${encodeURIComponent(movieName)}`;
}
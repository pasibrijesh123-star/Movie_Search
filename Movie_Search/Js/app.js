const API_KEY = "";

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
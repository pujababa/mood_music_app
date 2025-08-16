// Spotify playlists
const spotifyPlaylists = {
    happy: "https://open.spotify.com/embed/playlist/3bQy66sMaRDIUIsS7UQnuO?utm_source=generator",
    sad: "https://open.spotify.com/embed/playlist/41sfGuPPtIZHGPMyHN6y2G?utm_source=generator",
    chill: "https://open.spotify.com/embed/playlist/37i9dQZF1DWX76Z8XDsZzF?utm_source=generator",
    energetic: "https://open.spotify.com/embed/playlist/16JGZG9gKRs6jtbz2kb80b?utm_source=generator",
    romantic: "https://open.spotify.com/embed/playlist/0zc6Hq9OIAengtGG6a3lfs?utm_source=generator"
};
// Mood ke background colors
const moodColors = {
    happy: "linear-gradient(120deg, #f6d365, #fda085)",   // Yellow-Orange
    sad: "linear-gradient(120deg, #89f7fe, #66a6ff)",     // Blue shades
    chill: "linear-gradient(120deg, #a18cd1, #fbc2eb)",   // Purple-Pink
    energetic: "linear-gradient(120deg, #f093fb, #f5576c)", // Pink-Red
    romantic: "linear-gradient(120deg, #ff9a9e, #fecfef)"  // Soft Pink
};

// Function to load music based on mood
function loadMusic() {
    const mood = document.getElementById("moodSelect").value;
    const body = document.body;

    // Dynamic background using moodColors
    body.style.background = moodColors[mood] || "linear-gradient(120deg, #ff9a9e, #fad0c4)";

    // Load playlist
    document.getElementById("spotifyPlayer").src = spotifyPlaylists[mood] || "";
}


window.onload = function() {
    loadMusic("happy");                       // iframe me happy playlist load
    document.getElementById("moodSelect").selectedIndex = 0; // dropdown me placeholder dikhe
};


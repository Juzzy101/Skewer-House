// video from index.html opening function
let player;

const playBtn = document.getElementById("play-video-btn");
if (playBtn) {
  playBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const container = document.getElementById("video-container");
    container.classList.add("active");
    document.body.classList.add("noscroll");

    if (player) {
      player.playVideo();
    }
  });
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "3Hq8Buo3U_o",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    },
    events: {
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          closeVideo();
        }
      }
    }
  });
}

// video from index.html closing function at any time
function closeVideo() {
  const container = document.getElementById("video-container");
  container.classList.remove("active");
  document.body.classList.remove("noscroll");
  if (player) player.stopVideo();
}

const closeBtn = document.getElementById("close-video-btn");
if (closeBtn) {
  closeBtn.addEventListener("click", closeVideo);
}

// dark mode
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('darkModeToggle');
  const logo = document.getElementById('logo');

  if (!toggle || !logo) return;

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // swap colours of logo and skewer 
    const isDarkMode = document.body.classList.contains('dark-mode');
    logo.src = isDarkMode ? './Graphics/skewer-house-dark.jpg' : './Graphics/skewer-house-light-yel.png';

  // Swap light/darl button image
    toggle.src = isDarkMode ? './Graphics/LightMode.png' : './Graphics/DarkMode.png';


    // bootstrap
    document.documentElement.setAttribute(
      'data-bs-theme',
      isDarkMode ? 'dark' : 'light'
    );
  });
});
    //contact page
    //message
   document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('alertBox');

  if (form && alertBox) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alertBox.classList.remove('d-none');
      alertBox.classList.add('show'); 
      form.reset();
    });
  }
});

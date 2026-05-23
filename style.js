const sites = {
  all: [
    "https://wikipedia.org",
    "https://youtube.com",
    "https://reddit.com",
    "https://github.com"
  ],
  games: [
    "https://poki.com",
    "https://www.roblox.com"
  ],
  social: [
    "https://instagram.com",
    "https://tiktok.com"
  ]
};

let history = JSON.parse(localStorage.getItem("history")) || [];

function goRandom(category) {
  const list = sites[category] || sites.all;

  const site = list[Math.floor(Math.random() * list.length)];

  document.getElementById("status").innerText =
    "Redirecting to: " + site;

  history.unshift(site);
  history = history.slice(0, 5);
  localStorage.setItem("history", JSON.stringify(history));

  setTimeout(() => {
    window.location.href = site;
  }, 1000);
}

function showHistory() {
  alert(history.length ? history.join("\n") : "No history yet");
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const targetScreen = document.getElementById(screenId);

  if (!targetScreen) {
    console.error("Screen finns inte:", screenId);
    return;
  }

  targetScreen.classList.add("active");

  const bottomNav = document.querySelector(".bottom");

  if (bottomNav) {
    if (screenId === "login") {
      bottomNav.classList.add("hide-nav");
    } else {
      bottomNav.classList.remove("hide-nav");
    }
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function show(screenId) {
  showScreen(screenId);
}

function createAlarm(type) {
  const newAlarm = {
    id: Date.now(),
    type: type,
    status: "Skapad",
    createdBy: currentUser.id
  };

  incidents.push(newAlarm);
  currentIncident = newAlarm.id;

  alert("Larm skickat!");
  showScreen("home");
}

function logout() {
  currentUser = users[0];
  currentIncident = null;

  showScreen("login");
}

document.addEventListener("DOMContentLoaded", () => {
  showScreen("login");

  if (window.lucide) {
    lucide.createIcons();
  }
});
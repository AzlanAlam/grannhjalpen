function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

function createAlarm(type) {
  const newAlarm = {
    id: Date.now(),
    type: type,
    status: "Skapad"
  };

  incidents.push(newAlarm);

  alert("Larm skickat!");
}
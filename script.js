function updateUTCTime() {
  document.getElementById("utc-time").innerText = new Date().toUTCString();
}


setInterval(updateUTCTime, 1000);
updateUTCTime();

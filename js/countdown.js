  // ===== Countdown Timer ===== 
  // Displays remaining time until NYP NDP Chess Competition. intentionally put it sep 9 for the project
   const eventDate = new Date("2025-09-08T10:00:00");
function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  const timerEl = document.getElementById("countdown-timer");
  // Exit function if countdown element not found
  if (!timerEl) return;
  // if the time diff is 0 which mean the event has started
  if (diff <= 0) {
    timerEl.textContent = "Event Started!";
    clearInterval(timer);
    return;
  }
  // break diff into days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  timerEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s left to NYP NDP Chess Competition`;
}
// call function
updateCountdown();
// set interval to call the countdown every second. 
const timer = setInterval(updateCountdown, 1000);

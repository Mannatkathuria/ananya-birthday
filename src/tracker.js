let startTime = null;
let currentPage = null;

export function startTracking(page) {
  currentPage = page;
  startTime = Date.now();
}

export function stopTracking() {
  if (!currentPage || !startTime) return;

  const duration = Math.floor((Date.now() - startTime) / 1000);

  const log = {
    page: currentPage,
    duration,
    time: new Date().toISOString(),
  };

  console.log("TRACK:", log);

  // Save locally
  const logs = JSON.parse(localStorage.getItem("visitLogs")) || [];
  logs.push(log);
  localStorage.setItem("visitLogs", JSON.stringify(logs));

  // OPTIONAL: send to backend
  /*
  fetch("YOUR_API_ENDPOINT", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(log),
  });
  */

  currentPage = null;
  startTime = null;
}

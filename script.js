document.addEventListener("DOMContentLoaded", function () {
  updateProgress('cfa', 30);
  updateProgress('modeling', 20);
  updateProgress('valuation', 10);
  updateProgress('python', 5);
  updateProgress('tableau', 0);
});

function updateProgress(topic, percent) {
  document.getElementById(`${topic}-progress`).value = percent;
  document.getElementById(`${topic}-percent`).textContent = percent + '%';
}

document.addEventListener("DOMContentLoaded", function () {
  updateProgress('cfa', 30);
  updateProgress('modeling', 20);
  updateProgress('valuation', 10);
  updateProgress('python', 5);
  updateProgress('tableau', 0);

  loadChecklist();
  loadNotes();
});

function updateProgress(topic, percent) {
  document.getElementById(`${topic}-progress`).value = percent;
  document.getElementById(`${topic}-percent`).textContent = percent + '%';
}

// Checklist Functionality
const checkboxes = document.querySelectorAll(".checklist input");
checkboxes.forEach(box => {
  box.addEventListener("change", saveChecklist);
});

function saveChecklist() {
  let checkedItems = {};
  checkboxes.forEach(box => checkedItems[box.id] = box.checked);
  localStorage.setItem("cfaChecklist", JSON.stringify(checkedItems));
}

function loadChecklist() {
  let savedItems = JSON.parse(localStorage.getItem("cfaChecklist")) || {};
  checkboxes.forEach(box => {
    if (savedItems[box.id]) {
      box.checked = true;
    }
  });
}

// Notes Functionality
const notesArea = document.getElementById("notes");
if (notesArea) {
  notesArea.addEventListener("input", () => {
    localStorage.setItem("cfaNotes", notesArea.value);
  });
  notesArea.value = localStorage.getItem("cfaNotes") || "";
}

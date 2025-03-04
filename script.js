document.addEventListener("DOMContentLoaded", function () {
    loadChecklist();
    loadNotes();
    updateProgress(); // Ensure the progress bar updates correctly on load
});

// ✅ Fix Checklist Persistence
const checkboxes = document.querySelectorAll(".checklist input");

checkboxes.forEach(box => {
    box.addEventListener("change", () => {
        saveChecklist();
        updateProgress();
    });
});

function saveChecklist() {
    let checkedItems = {};
    checkboxes.forEach(box => {
        checkedItems[box.id] = box.checked; // Store checkbox ID and its state (true/false)
    });
    localStorage.setItem(document.title + "-Checklist", JSON.stringify(checkedItems));
}

function loadChecklist() {
    let savedItems = JSON.parse(localStorage.getItem(document.title + "-Checklist")) || {};
    checkboxes.forEach(box => {
        if (savedItems[box.id]) {
            box.checked = true; // Restore the checked state
        }
    });
}

// ✅ Fix Notes Persistence
const notesArea = document.querySelector("textarea");
if (notesArea) {
    notesArea.addEventListener("input", () => {
        localStorage.setItem(document.title + "-Notes", notesArea.value);
    });
    notesArea.value = localStorage.getItem(document.title + "-Notes") || "";
}

// ✅ Fix Progress Bar Issue
function updateProgress() {
    const totalItems = checkboxes.length;
    const checkedItems = document.querySelectorAll(".checklist input:checked").length;
    const progressPercentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;

    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
        progressBar.style.width = progressPercentage + "%";
        progressBar.innerText = Math.round(progressPercentage) + "%";
    }
}

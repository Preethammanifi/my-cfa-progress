document.addEventListener("DOMContentLoaded", function () {
    loadChecklist();
    loadNotes();
});

// ✅ Fix Checklist Persistence
const checkboxes = document.querySelectorAll(".checklist input");

checkboxes.forEach(box => {
    box.addEventListener("change", () => {
        saveChecklist();
    });
});

function saveChecklist() {
    let checkedItems = {};
    checkboxes.forEach(box => {
        checkedItems[box.id] = box.checked; // Store checkbox ID and its state (checked or not)
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

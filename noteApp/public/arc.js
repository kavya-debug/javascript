import { renderNote } from './render.js';

const archiveNode = document.querySelector(".archive-notes-container");

let archiveArray = JSON.parse(localStorage.getItem("archived")) || [];
console.log(renderNote(archiveArray));
archiveNode.innerHTML = renderNote(archiveArray);

const notesdisplay = document.querySelector(".archive-notes");
notesdisplay.addEventListener("click", (e) => {
    const type = e.target.dataset.type;
    const id = e.target.dataset.id;
    console.log({ type, id });
    switch (type) {
        case "delete":
            archiveArray = archiveArray.filter(item => item.id != id);
            console.log(archiveArray);
            localStorage.setItem("archived", JSON.stringify(archiveArray));
            // let PineedArra = noteArray.filter(item => item.isPinned === true);
            // let unPinnedArray = noteArray.filter(item => item.isPinned !== true);
            archiveNode.innerHTML = renderNote(archiveArray);
            break;
        case "archive":
             archiveArray = archiveArray.map(item => item.id == id ? { ...item, isArchived: !item.isArchived } : item);
          
            let unarchived = archiveArray.filter(item => item.isArchived === false);
            let noteArray = JSON.parse(localStorage.getItem("note"));
            noteArray = [...noteArray, ...unarchived];
            console.log("noteArray", noteArray);
            localStorage.setItem("note", JSON.stringify(noteArray));

            archiveArray = archiveArray.filter(item => item.isArchived === true);
            localStorage.setItem("archived", JSON.stringify(archiveArray));
            archiveNode.innerHTML = renderNote(archiveArray);
    }
});
// import {renderNote} from "/workspace/practice/noteApp/render";

import { renderNote } from "./render.js";

const addButton = document.querySelector(".add-btn");
const noteContainer = document.querySelector(".notes-container");
const pinnedNoteContainer = document.querySelector(".pinned-notes-container");


let noteArray = JSON.parse(localStorage.getItem("note")) != null ? JSON.parse(localStorage.getItem("note")) : [];
console.log(JSON.parse(localStorage.getItem("note")));
let archivedNoteArray = JSON.parse(localStorage.getItem("archived")) != null ? JSON.parse(localStorage.getItem("archived")) : [];

console.log(noteArray);
if (noteArray.length > 0) {
    let PineedArray = noteArray.filter(item => item.isPinned === true);
    let unPinned = noteArray.filter(item => item.isPinned !== true);

    pinnedNoteContainer.innerHTML = renderNote(PineedArray);
    noteContainer.innerHTML = renderNote(unPinned);

    console.log(PineedArray);
}







addButton.addEventListener("click", (e) => {

    let title = document.querySelector(".title");
    let note = document.querySelector(".note");
    if (title.value.trim() != "" && note.value.trim() != "") {

        noteArray = [...noteArray, { "title": title.value.trim(), "note": note.value.trim(), "id": Date.now(), isPinned: false, isArchived: false }];

        let PineedArray = noteArray.filter(item => item.isPinned === true);
        let unPinned = noteArray.filter(item => item.isPinned !== true);


        pinnedNoteContainer.innerHTML = renderNote(PineedArray);
        noteContainer.innerHTML = renderNote(unPinned);



        localStorage.setItem("note", JSON.stringify(noteArray));
        title.value = note.value = "";
    }

});


const notesdisplay = document.querySelector(".notes-display");
notesdisplay.addEventListener("click", (e) => {
    const type = e.target.dataset.type;
    const id = e.target.dataset.id;
    console.log({ type, id });
    switch (type) {
        case "delete":
            noteArray = noteArray.filter(item => item.id != id);
            localStorage.setItem("note", JSON.stringify(noteArray));

            let PineedArra = noteArray.filter(item => item.isPinned === true);
            let unPinnedArray = noteArray.filter(item => item.isPinned !== true);

            pinnedNoteContainer.innerHTML = renderNote(PineedArra);
            noteContainer.innerHTML = renderNote(unPinnedArray);
            break;
        case "pinned":
            noteArray = noteArray.map(item => item.id == id ? { ...item, isPinned: !item.isPinned } : item);
            let PineedArray = noteArray.filter(item => item.isPinned === true);
            let unPinned = noteArray.filter(item => item.isPinned !== true);
            console.log(PineedArray);

            localStorage.setItem("note", JSON.stringify(noteArray));
            pinnedNoteContainer.innerHTML = renderNote(PineedArray);
            noteContainer.innerHTML = renderNote(unPinned);
            break;
        case "archive":
            noteArray = noteArray.map(item => item.id == id ? { ...item, isArchived: !item.isArchived } : item);
            console.log(" isArchived true ", noteArray);
            let archivArray = noteArray.filter(item => item.isArchived === true);

            console.log(archivedNoteArray);
            archivedNoteArray = [...archivedNoteArray, ...archivArray];

            console.log(" archivedNoteArray ", archivedNoteArray);
             localStorage.setItem("archived", JSON.stringify(archivedNoteArray));

            noteArray = noteArray.filter(item => item.isArchived === false);
            localStorage.setItem("note", JSON.stringify(noteArray));

            let PineedArr = noteArray.filter(item => item.isPinned === true);
            let unPinne = noteArray.filter(item => item.isPinned !== true);


            pinnedNoteContainer.innerHTML = renderNote(PineedArr);
            noteContainer.innerHTML = renderNote(unPinne);
            break;
    }

});





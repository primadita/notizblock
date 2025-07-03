let notes = [];
let archives = [];
let trashbin =[];


function init(){
    getFromLocalStorage();
    renderAll();
}

function renderAll(){
    renderNotes();
    renderArchives();
    renderTrashNotes();
}

function getFromLocalStorage(){
    let notesArr = JSON.parse(localStorage.getItem("notes"));
        if (notesArr !== null){
            notes = notesArr;
        }

    let archiveArr = JSON.parse(localStorage.getItem("archives"));
        if (archiveArr !== null){
            archives = archiveArr;
        }

    let trsArr = JSON.parse(localStorage.getItem("archives"));
        if (trsArr !== null){
            archives = trsArr;
        }
}

function renderNotes(){
    const contentRef = document.getElementById('all-notes');
    contentRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notes.length; indexNote++){
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
    localStorage.setItem("notes", JSON.stringify(notes));  
}

function renderArchives(){
    const archiveRef = document.getElementById('archive-notes');
    archiveRef.innerHTML = "";
    
    for (let indexArchive = 0; indexArchive < archives.length; indexArchive++){
        archiveRef.innerHTML += getArchiveTemplate(indexArchive);
    }
    localStorage.setItem("archives", JSON.stringify(archives));
}

function renderTrashNotes(){
    let trashbinRef = document.getElementById('trash');
    trashbinRef.innerHTML ="";

    for (let indexTrashbin = 0; indexTrashbin < trashbin.length; indexTrashbin++){
        trashbinRef.innerHTML += getTrashbinTemplate(indexTrashbin);
    }; 
    localStorage.setItem("trashbin", JSON.stringify(trashbin));
}

function addSingleNote(){
    const noteTitleInputRef = document.getElementById("input-title");
    const noteInputRef = document.getElementById("input-desc"); 
    
    let noteInput = {};
    noteInput.title = noteTitleInputRef.value;
    noteInput.desc = noteInputRef.value;
    
    notes.push(noteInput);
    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";

    localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(originarray, index){
    let gotoTrash = originarray;
    gotoTrash = gotoTrash.splice(index,1);
    trashbin.push(gotoTrash[0]);
    
    renderAll();
}

function sendToArchive(indexNote){
    let gotoArchive = notes.splice(indexNote,1);
    archives.push(gotoArchive[0]);
    
    renderNotes();
    renderArchives();
}

function sendToNote(originarray, index){
    let gotoNote = originarray;
    gotoNote = gotoNote.splice(index,1);
    notes.push(gotoNote[0]);
    
    renderAll();
}

function deleteIrrevocably(indexTrashbin){
    trashbin.splice(indexTrashbin,1);
    renderTrashNotes();
}

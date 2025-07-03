let notes = [
    {
        title: "a",
        desc: "shopping"
    },
    {
        title: "b",
        desc: "calling"
    }
];
let archives = [
    {
        title: "c",
        desc: "washing"
    },
    {
        title: "d",
        desc: "cleaning"
    }
];
let trashbin =[
    {
        title: "e",
        desc: "TV"
    },
    {
        title: "f",
        desc: "watering plants"
    }
];



// ich muss definieren wo sie anzuzeigen sind
function init(){
    renderNotes();
    renderArchives();
    renderTrashNotes();
}

function renderNotes(){
    const contentRef = document.getElementById('all-notes');
    contentRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notes.length; indexNote++){
        // const singleNote = notes[indexNote];
        contentRef.innerHTML += getNotesTemplate(indexNote);
    } 
}

function renderArchives(){
    const archiveRef = document.getElementById('archive-notes');
    archiveRef.innerHTML = "";
    
    for (let indexArchive = 0; indexArchive < archives.length; indexArchive++){
        // const singleArchive = archives[indexArchive];
        archiveRef.innerHTML += getArchiveTemplate(indexArchive);
    } 
}
function renderTrashNotes(){
    let trashbinRef = document.getElementById('trash');
    trashbinRef.innerHTML ="";

    for (let indexTrashbin = 0; indexTrashbin < trashbin.length; indexTrashbin++){
        // let singleTrash = trashbin[indexTrashbin];
        trashbinRef.innerHTML += getTrashbinTemplate(indexTrashbin);
    }
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
}


function deleteNote(originarray, index){
    let gotoTrash = originarray;
    gotoTrash = gotoTrash.splice(index,1);
    trashbin.push(gotoTrash[0]);
    
    init();
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
    
    init();
}


function deleteIrrevocably(indexTrashbin){
    trashbin.splice(indexTrashbin,1);
    renderTrashNotes();
}

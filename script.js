
let notes = ["banana", "orange"];
let trashbin =[];


// ich muss definieren wo sie anzuzeigen sind
function renderNotes(){

    let contentRef = document.getElementById('display-all');
    contentRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notes.length; indexNote++){
        const singleNote = notes[indexNote];
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
    
    
}



// notizen hinzufügen
function addSingleNote(){
    let noteInputRef = document.getElementById("input-note");
    let noteInput = noteInputRef.value ;
    notes.push(noteInput);
    console.log(notes);
    renderNotes();

    noteInputRef.value = "";
}

// Löschen function
function deleteSingleNote(indexNote){
    let trashNote = notes.splice(indexNote,1);
    trashbin.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

function renderTrashNotes(){
    let trashbinRef = document.getElementById('trash');
    trashbinRef.innerHTML ="";

    for (let indexTrashbin = 0; indexTrashbin < trashbin.length; indexTrashbin++){
        let singleTrash = trashbin[indexTrashbin];
        trashbinRef.innerHTML += getTrashbinTemplate(indexTrashbin);
    }
}

function deleteNoteForever(indexTrashbin){
    trashbin.splice(indexTrashbin,1);
    renderTrashNotes();
}
//
// notizen archivieren
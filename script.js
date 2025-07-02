
let notes = ["banana", "orange"];

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
    notes.splice(indexNote,1);
    renderNotes();
}

//
// notizen archivieren
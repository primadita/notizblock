
let notes = [];

// ich muss definieren wo sie anzuzeigen sind
function renderNotes(){

    let contentRef = document.getElementById('content');
    
    for (let indexNote = 0; indexNote < notes.length; indexNote++){
        const singleNote = notes[indexNote];
        contentRef.innerHTML += getNotesTemplate(singleNote);
    }
    
    
}



// notizen hinzufügen
function addNotes(){

}
// notizen löschen
// notizen archivieren
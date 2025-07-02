function getNotesTemplate(indexNote){
    return `
            <p>${notes[indexNote]}</p><button onclick="deleteSingleNote(${indexNote})">Delete</button>
        `
}

function getTrashbinTemplate(indexTrashbin){
    return `
            <p>${trashbin[indexTrashbin]}</p><button onclick="deleteNoteForever(${indexTrashbin})">Delete forever</button>
        `
}
function getNotesTemplate(indexNote){
    return `
            <p>${notes[indexNote]}</p><button onclick="deleteSingleNote(${indexNote})">Delete</button>
        `
}
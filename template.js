function getNotesTemplate(indexNote){
    return `
        <div class="postit">
            <h3>${notes[indexNote].title}<h3>
            <p>${notes[indexNote].desc}</p>
            <button class="delete-btn" onclick="deleteNote(notes, ${indexNote})">X</button>
            <button class="archive-btn" onclick="sendToArchive(${indexNote})">Archive</button>
        </div>
    `
}

function getArchiveTemplate(indexArchive){
    return `
        <div class="postit">
            <h3>${archives[indexArchive].title}<h3>
            <p>${archives[indexArchive].desc}</p>
            <button class="delete-btn" onclick="deleteNote(archives, ${indexArchive})">X</button>
            <button class="main-btn" onclick="sendToNote(archives, ${indexArchive})">Back</button>
        </div>
    `
}

function getTrashbinTemplate(indexTrashbin){
    return `
        <div class="postit">
            <h3>${trashbin[indexTrashbin].title}<h3>
            <p>${trashbin[indexTrashbin].desc}</p>
            <button class="delete-btn" onclick="deleteIrrevocably(${indexTrashbin})">DEL</button>
            <button class="main-btn" onclick="sendToNote(trashbin, ${indexTrashbin})">Back</button>
        </div>
    `
}
import { NoteEstruture } from "../index";

function deleteNotes(buttons: NodeList) {
  const notesInLocalStorage = localStorage.getItem('notes')

  function deleteNote(event: Event) {
    const buttonClicked = event.target
    if(buttonClicked instanceof HTMLElement) {
      if(buttonClicked.parentElement && notesInLocalStorage) {
        const idItem = +buttonClicked.parentElement.id
        if(notesInLocalStorage) {
          const arrayNotes: NoteEstruture[] = JSON.parse(notesInLocalStorage)
          const filterDeleteNote = arrayNotes.filter(item => item.id !== idItem)
          localStorage.setItem('notes', JSON.stringify(filterDeleteNote))
          window.location.reload()
        }
      }
    }
  }

  buttons.forEach(item => item.addEventListener('click', deleteNote))
}

export default deleteNotes
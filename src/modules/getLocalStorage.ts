import Note from './Note.js';
import { NoteEstruture } from '../index.js';

function getLocalStorage(itemInStorage: string) {
  if (itemInStorage) {
    const itemsArray: NoteEstruture[] = JSON.parse(itemInStorage);
    if (itemsArray instanceof Array) {
      itemsArray.forEach((item) => {
        const novaNota = new Note({
          title: item.title,
          text: item.text,
          reminder: item.reminder,
          color: item.color,
          id: item.id,
        });
        novaNota.createNote();
      });
    }
  }
}

export default getLocalStorage;

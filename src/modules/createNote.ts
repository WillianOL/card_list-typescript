import Note from './Note.js';
import { color } from './colorSelect.js';

interface ItemsEstruture {
  itemValue: string;
  itemName: string;
}

function createNote(arrayItems: ItemsEstruture[]) {
  if (arrayItems instanceof Array) {
    const title = arrayItems.filter((item) => item.itemName === 'titulo');
    const text = arrayItems.filter((item) => item.itemName === 'conteudo');
    const reminder = arrayItems.filter((item) => item.itemName === 'lembrete');
    const conteiner = document.querySelector('.conteinerDeNotas');

    if (conteiner instanceof HTMLElement) {
      const novaNota = new Note({
        title: title[0].itemValue,
        text: text[0].itemValue,
        reminder: reminder[0].itemValue,
        color: color,
        id: Math.floor(Math.random() * 100000)
      });
      novaNota.createNote();
    }
  }
}

export default createNote;

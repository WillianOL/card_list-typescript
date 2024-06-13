import { colorSelect } from './modules/colorSelect.js';
import deleteNotes from './modules/deleteNotes.js';
import getLocalStorage from './modules/getLocalStorage.js';
import takeValuesInputs from './modules/takeValuesInputs.js';
export let notesCreated = [];
const itemInLocalStorage = localStorage.getItem('notes');
if (itemInLocalStorage) {
    getLocalStorage(itemInLocalStorage);
}
takeValuesInputs();
const deleteButtons = document.querySelectorAll('.buttonDelete');
if (deleteButtons && deleteButtons instanceof NodeList) {
    deleteNotes(deleteButtons);
}
const botoesCores = document.querySelectorAll('[data-cor]');
if (botoesCores instanceof NodeList) {
    colorSelect(botoesCores);
}

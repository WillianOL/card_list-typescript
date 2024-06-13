import Note from './Note.js';
function getLocalStorage(itemInStorage) {
    if (itemInStorage) {
        const itemsArray = JSON.parse(itemInStorage);
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

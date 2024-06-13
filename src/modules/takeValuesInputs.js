import createNote from './createNote.js';
import deleteNotes from './deleteNotes.js';
import setNewEror from './setNewError.js';
function takeValuesInputs() {
    const buttonSubmit = document.querySelector('#botaoEnviar');
    const inputs = document.querySelectorAll('[data-inputValue]');
    function handleSubmit(event) {
        event.preventDefault();
        if (inputs instanceof NodeList) {
            const itens = [...inputs];
            validateInputs(itens);
        }
    }
    if (buttonSubmit instanceof HTMLButtonElement) {
        buttonSubmit.addEventListener('click', handleSubmit);
    }
    function validateInputs(items) {
        const itemNotFilled = items.find((item) => {
            if (item instanceof HTMLInputElement ||
                item instanceof HTMLTextAreaElement) {
                return item.value === '';
            }
        });
        if (itemNotFilled) {
            setNewEror(true);
        }
        else {
            let value;
            let name;
            const itensValues = items.map((item) => {
                if (item instanceof HTMLInputElement ||
                    item instanceof HTMLTextAreaElement) {
                    value = item.value;
                    name = item.id;
                }
                return {
                    itemValue: value,
                    itemName: name,
                };
            });
            createNote(itensValues);
            const deleteButtons = document.querySelectorAll('.buttonDelete');
            if (deleteButtons instanceof NodeList) {
                deleteNotes(deleteButtons);
            }
            setNewEror(false);
        }
    }
}
export default takeValuesInputs;

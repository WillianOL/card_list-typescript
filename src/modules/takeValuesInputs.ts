import createNote from './createNote.js';
import deleteNotes from './deleteNotes.js';
import setNewEror from './setNewError.js';

function takeValuesInputs() {
  const buttonSubmit = document.querySelector('#botaoEnviar');
  const inputs = document.querySelectorAll('[data-inputValue]');

  function handleSubmit(event: MouseEvent) {
    event.preventDefault()
    if (inputs instanceof NodeList) {
      const itens = [...inputs];
      validateInputs(itens);
    }
  }
  if (buttonSubmit instanceof HTMLButtonElement) {
    buttonSubmit.addEventListener('click', handleSubmit);
  }

  function validateInputs(items: Element[]) {
    const itemNotFilled = items.find((item) => {
      if (
        item instanceof HTMLInputElement ||
        item instanceof HTMLTextAreaElement
      ) {
        return item.value === '';
      }
    });
    if (itemNotFilled) {
      setNewEror(true);
    } else {
      let value: string;
      let name: string;
      const itensValues = items.map((item) => {
        if (
          item instanceof HTMLInputElement ||
          item instanceof HTMLTextAreaElement
        ) {
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

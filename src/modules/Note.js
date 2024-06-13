import { notesCreated } from '../index.js';
const containerNotes = document.querySelector('.conteinerDeNotas');
class Note {
    title;
    text;
    reminder;
    color;
    id;
    constructor(dados) {
        this.title = dados.title;
        this.text = dados.text;
        this.reminder = dados.reminder;
        this.color = dados.color;
        this.id = dados.id;
    }
    createNote() {
        notesCreated.push({
            title: this.title,
            text: this.text,
            color: this.color,
            reminder: this.reminder,
            id: this.id,
        });
        localStorage.setItem('notes', JSON.stringify(notesCreated));
        this.insertNote();
    }
    insertNote() {
        const conteinerNotes = document.createElement('li');
        conteinerNotes.setAttribute('id', `${this.id}`);
        notesCreated.forEach((item) => {
            conteinerNotes.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.text}</p>
            <span>${item.reminder.replaceAll('-', '/')}</span>
            <button class="buttonDelete">X</button>
          `;
            conteinerNotes.style.backgroundColor = `${item.color}`;
        });
        if (containerNotes instanceof HTMLUListElement) {
            containerNotes.appendChild(conteinerNotes);
        }
    }
}
export default Note;

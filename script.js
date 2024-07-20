// script.js
document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.getElementById('notesContainer');
    const addNoteButton = document.getElementById('addNoteButton');
    const toggleModeButton = document.getElementById('toggleModeButton');
    const body = document.body;

    let draggedNote = null;

    // Load mode from local storage
    const loadMode = () => {
        const mode = localStorage.getItem('mode') || 'light-mode';
        body.className = mode;
    };

    // Toggle light/dark mode
    const toggleMode = () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('mode', 'dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('mode', 'light-mode');
        }
    };

    // Load notes from local storage
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesContainer.innerHTML = '';
        notes.forEach(note => createNoteElement(note.text, note.position));
    };

    // Save notes to local storage
    const saveNotes = () => {
        const notes = [];
        document.querySelectorAll('.note').forEach(noteElement => {
            const noteText = noteElement.querySelector('textarea').value;
            const position = {
                top: noteElement.style.top,
                left: noteElement.style.left
            };
            notes.push({ text: noteText, position });
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    // Create note element
    const createNoteElement = (text = '', position = { top: '50%', left: '50%' }) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.style.top = position.top;
        noteElement.style.left = position.left;
        noteElement.setAttribute('draggable', 'true');

        const textarea = document.createElement('textarea');
        textarea.className = 'w-full h-full bg-transparent border-none resize-none focus:outline-none';
        textarea.value = text;
        textarea.addEventListener('input', saveNotes);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '&times;';
        deleteButton.addEventListener('click', () => {
            noteElement.remove();
            saveNotes();
        });

        noteElement.appendChild(textarea);
        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);

        // Drag events
        noteElement.addEventListener('dragstart', (e) => {
            draggedNote = noteElement;
            e.dataTransfer.effectAllowed = 'move';
        });

        noteElement.addEventListener('dragend', () => {
            draggedNote = null;
            saveNotes();
        });
    };

    // Handle dragging over the container
    notesContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (draggedNote) {
            const rect = notesContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - (draggedNote.offsetWidth / 2);
            const y = e.clientY - rect.top - (draggedNote.offsetHeight / 2);
            draggedNote.style.left = `${x}px`;
            draggedNote.style.top = `${y}px`;
        }
    });

    // Add note button click event
    addNoteButton.addEventListener('click', () => {
        createNoteElement();
        saveNotes();
    });

    // Toggle mode button click event
    toggleModeButton.addEventListener('click', toggleMode);

    // Load mode and notes on page load
    loadMode();
    loadNotes();
});

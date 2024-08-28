import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, removeNote, updateNote, setNotes } from '../features/notesSlice';
import { v4 as uuidv4 } from 'uuid';

const NoteApp = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes-app')) || [];
    dispatch(setNotes(storedNotes));
  }, [dispatch]);

  // Save notes to localStorage whenever notes are updated
  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    dispatch(addNote({
      id: uuidv4(),
      content: '',
    }));
  };

  const handleUpdateNote = (id, content) => {
    dispatch(updateNote({ id, content }));
  };

  const handleDeleteNote = (id) => {
    if (window.confirm('Do you want to delete this note?')) {
      dispatch(removeNote(id));
    }
  };

  return (
    <div className="flex flex-col items-center p-12 bg-gradient-to-l from-lightblue to-lightgreen min-h-screen">
      <h1 className="text-darkblue text-4xl mb-4">Note App</h1>
      <p className="text-darkblue text-lg mb-6">Double click on a note to remove it</p>
     
      <button 
          className="w-48 h-48 mb-8 border border-opacity-30 bg-opacity-20 rounded-lg text-6xl font-bold text-darkblue cursor-pointer hover:bg-opacity-50 hover:text-opacity-70 transition-all duration-300"
          onClick={handleAddNote}
        >
          +
        </button>
      <div className="flex space-x-4">
    
        <div className="flex flex-wrap gap-4 overflow-auto max-w-full mb-8">
          {notes.map((note) => (
            <textarea
              key={note.id}
              className="w-48 h-48 p-4 m-2 rounded-lg resize-none shadow-md text-lg text-darkblue border-none outline-none bg-opacity-10 bg-white placeholder-gray-400 placeholder-opacity-30 hover:shadow-lg transition-all duration-300"
              placeholder="Empty Note"
              value={note.content}
              onChange={(e) => handleUpdateNote(note.id, e.target.value)}
              onDoubleClick={() => handleDeleteNote(note.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteApp;

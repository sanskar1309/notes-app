import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    removeNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const index = state.findIndex(note => note.id === action.payload.id);
      if (index !== -1) {
        state[index].content = action.payload.content;
      }
    },
    setNotes: (state, action) => {
      return action.payload;
    },
  },
});

export const { addNote, removeNote, updateNote, setNotes } = notesSlice.actions;

export default notesSlice.reducer;

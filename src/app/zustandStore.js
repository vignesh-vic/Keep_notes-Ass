"use client";
import { create } from "zustand";

export const notesStore = create((set) => ({
  notes: [],
  editData: null,
  loginState:false,
  addNewNotes: (title, content) =>
    set((state) => ({
      notes: [...state.notes, { id: state.notes.length + 1, title, content }],
    })),
  editNote: (data) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id == data.id
          ? {
              ...note,
              title: data.title,
              content: data.content,
              lastModified: new Date().toLocaleString(),
            }
          : note
      ),
    })),
  addEditNote: (data) => set(() => ({ editData: data })),
  resetData: () => set(() => ({ editData: null })),
  deleteNotes: (id) =>
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
  toggleLogin: (data) =>
      set(() => ({ loginState: data })),
}));

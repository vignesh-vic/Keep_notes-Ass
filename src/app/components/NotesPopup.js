"use client"
import { useEffect, useState } from "react";
import { notesStore } from "../zustandStore";

export default function NotesPopup({ onClose,  showModal }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const addNote = notesStore((state) => state.addNewNotes)
    const editData = notesStore((state) => state.editData);
    const editNote = notesStore((state) => state.editNote);

    useEffect(() => {
        if (showModal == true && editData) {
            setTitle(editData.title)
            setContent(editData.content)
        }
    }, [showModal, editData])

    const handleAdd = () => {
        if (!title && !content) {
            alert("All fileds Required!")
            return
        }
        addNote(title, content);
        setTitle("");
        setContent("");
        onClose();

    };

    const handleEdit = () => {
        const data = { id: editData.id, title, content }
        editNote(data)
        onClose()
    }

    return (
        <div className="fixed inset-0 flex  o justify-center items-center z-50">
            <div className="absolute inset-0 bg-black  opacity-60"></div>
            <div className="relative p-5 z-10 bg-[#fef6e4] w-[350px]  rounded shadow-lg">
                <div className=" border-b  flex justify-between items-center mb-10 ">
                    <h2 className="text-lg font-semibold">{editData ? 'Edit Notes' : 'Add Notes'} </h2>
                    <button className="text-red-600 font-bold cursor-pointer" onClick={onClose}>✖</button>
                </div>
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full mb-3 border px-2 py-1 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                />
                <textarea
                    placeholder="Write note..."
                    className="w-full h-28 border px-2 py-1 rounded"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}

                />
                <div className="flex justify-between mt-4">
                    <button className="bg-green-500 text-white cursor-pointer px-4 py-1 rounded" onClick={editData ? handleEdit : handleAdd}>{editData ? 'Update' : 'Add'}</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded cursor-pointer" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>

    );
}

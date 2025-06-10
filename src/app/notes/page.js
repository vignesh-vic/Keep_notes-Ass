"use client"
import React, { useState } from 'react'
import { notesStore } from '../zustandStore';
import NotesPopup from '../components/NotesPopup';

const Notes = () => {
    const [showModal, setShowModal] = useState(false);
    const savedUser = JSON.parse(localStorage.getItem('signupData'));
    const notes = notesStore((state) => state.notes);
    const addEditData = notesStore((state) => state.addEditNote);
    const restEdit = notesStore((state) => state.resetData);
    const deleteNote = notesStore((state) => state.deleteNotes);

    
    const handleEdit = (data) => {
        addEditData(data)
        setShowModal(true)
    }

    const handleDelete = (id) => {
        deleteNote(id)
    }


    return (
        <div className='bg-amber-100 h-[100vh] py-10 p-10'>
            <h1 className=' text-2xl font-bold'>Good Morning  {savedUser?.username.charAt(0).toUpperCase() + savedUser?.username.slice(1)}! </h1>

            {showModal && <NotesPopup showModal={showModal} onOpen={() => setShowModal(true)} onClose={() => setShowModal(false)} />}
            <div onClick={() => { restEdit(); setShowModal(true) }}
                className="fixed cursor-pointer bottom-5 right-5 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-2xl">
                📝
            </div>
            <div >
                {notes && notes.map((data, i) => (
                    <div className="w-64 m-10  bg-white rounded-md shadow-md border border-gray-300 overflow-hidden relative" key={i}>
                        <buttton className='flex justify-end p-1 cursor-pointer' onClick={() => handleDelete(data.id)}>❌</buttton>
                        <div className='cursor-pointer' onClick={() => handleEdit(data)}>

                            <h1 className='bg-orange-300 p-3 '>{data?.title} </h1>
                            <p className='p-3 py-10'>{data?.content}</p>
                            <p className='  float-right text-sm'>{data?.lastModified}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes

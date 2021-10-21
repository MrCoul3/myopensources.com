import React, {useEffect, useState} from "react";
import NotesList from "./NotesList";
import {
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import NoteForm from "./NoteForm";
import OpenedNote from "./OpenedNote";
import dateFormat from "dateformat";

export type Note = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
}
export interface Notes extends Array<Note> {}

export default function NotesMain() {

    const notesFromLocalStorage = () => localStorage.getItem('notes') !== null ? JSON.parse(localStorage.getItem('notes') as string) : [];
    const [notes, setNotes] = useState(notesFromLocalStorage());
    const [currentListItemID, setCurrentListItemID] = useState<number | null>(Number(window.location.pathname.split('/')[2]));
    const [selectedNote, setSelectedNote] = useState();
    const [isEdit, setIsEdit] = useState(false);

    function renderLeftMenu() {
        return (
            <div className='card left-menu'>
                {renderLeftMenuHeader()}
                <div className="card-body">
                    <NotesList noteListCurrent={viewNote} notes={notes}/>
                </div>
            </div>
        );
    }
    useEffect(()=> {
        // console.log(notes)
    }, [notes])
    function renderLeftMenuHeader() {
        return (
            <div className='card-header'>
                <Route exact path='/portfolio/react-notes/note' render={() =>
                    <Link to='/portfolio/react-notes'>
                        <button type="button" style={{color: "#fff"}} className="btn btn-warning">
                            Close Form
                        </button>
                    </Link>}>
                </Route>
                {['/portfolio/react-notes', '/portfolio/react-notes/note/:id'].map(path =>
                    <Route exact path={path} render={() =>
                        <Link to='/portfolio/react-notes/note'>
                            <button type="button" className="btn btn-success">Add Note</button>
                        </Link>}>
                    </Route>)}
            </div>
        );
    }

    function getID() {
        if (notesFromLocalStorage().length > 0) {
            return notesFromLocalStorage()[notesFromLocalStorage().length - 1].id + 1;
        } else {
            return 0;
        }
    }

    function getData(note: Note) {
        note.id = getID();
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function viewNote(event: any) {
        const id = event.target.closest('a').getAttribute('id');
        setCurrentListItemID(id);
        setIsEdit(false)
    }

    const openedNote = () => {
        return notes.filter((note: {id: number}) => note.id === +currentListItemID!);
    };

    function refreshNotes(notes: Notes) {
        localStorage.setItem('notes', JSON.stringify(notes));
        setNotes(notes);
        setCurrentListItemID(null);
    }

    function deleteNote () {
        if (window.confirm('are you sure you want to delete the note?')) {
            const notePos = notes.findIndex((n: { id: number; }): boolean => n.id === +currentListItemID!)
            notes.splice(notePos, 1)
            refreshNotes(notes);
        }
    }

    function editNote() {
        setIsEdit(true)
        const notePos = notes.findIndex((n: { id: number; }): boolean => n.id === +currentListItemID!)
        setSelectedNote(notes[notePos])
    }

    function saveEditedNote(note: Note) {
        note.id = +currentListItemID!
        const notePos = notes.findIndex((n: { id: number; }) => n.id === note.id)
        notes[notePos] = note;
        refreshNotes(notes);
    }

    function renderRightForm() {
        return (
            <div>
                <Route exact path='/portfolio/react-notes/note' render={() =>
                    <NoteForm saveNote={getData}/>
                }/>
                <Route exact path='/portfolio/react-notes/note/:id' render={() =>
                    isEdit ? <NoteForm saveNote={saveEditedNote} currNote={selectedNote} isEdit={isEdit} deleteNote={deleteNote} /> :
                        (currentListItemID !== null ? <OpenedNote editNote={editNote} deleteNote={deleteNote} note={openedNote()}/> : <Redirect to='/portfolio/react-notes'/>)
                }/>
            </div>
        );
    }


    return (
        <div className='notes-app container-fluid'>
            <div className="row">
                <div className="col-md-3">
                    {renderLeftMenu()}
                </div>
                <div className="col-md-9">
                    {renderRightForm()}
                </div>
            </div>
        </div>
    );
}
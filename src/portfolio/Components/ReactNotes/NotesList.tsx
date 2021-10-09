import React from "react";
import {NavLink} from "react-router-dom";
import {Note, Notes} from "./NotesMain";

interface INoteListProps  {
    notes: Notes
    noteListCurrent(e: any): void
}

export default function NotesList(props: INoteListProps) {

    const notes = props.notes;

    const getListItems = () => {
        return notes.map(note =>
            <NavLink
                key={ note.id.toString() }
                className='list-group-item list-group-item-light'
                to={ `/portfolio/react-notes/note/${note.id}` }
                id={note.id as any}
                onClick={(e) => props.noteListCurrent(e)}
            >
                <div className='text-truncate h6 '>{ note.title }</div>
                <div className='font-weight-light fst-italic small'>{ note.date }</div>
            </NavLink>
        )
    }


    return (
        <ul className="list-group">
            {!notes.length ? <span >There are no notes</span> : getListItems()}
        </ul>
    );
}
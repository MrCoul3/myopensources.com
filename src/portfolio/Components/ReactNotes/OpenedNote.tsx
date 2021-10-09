import React from "react";
import {Note} from "./NotesMain";

type Props = {
    note: [Note]
    editNote(): void
    deleteNote(): void
}

export default function OpenedNote(props: Props) {

    const [note] = props.note;

    return (
        <div className="card">
            <div className="card-header h4">{note.title}</div>
            <div className="card-body">
                <p className='text-center small text-muted'>last modified: {note.date + ' at ' + note.time}</p>
                <p>{note.description}</p>
                <hr/>
                <button onClick={props.editNote} className='btn btn-success'>Edit Note</button>
                <button onClick={props.deleteNote} className='btn btn-danger float-end'>Delete Note</button>
            </div>
        </div>
    );
}
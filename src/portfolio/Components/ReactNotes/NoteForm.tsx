import React, {FormEvent, ReactElement, useRef, useState} from "react";
import dateFormat from 'dateformat';
import {Redirect} from "react-router-dom";
import {Note} from "./NotesMain";

type Props = {
    currNote?: Note | undefined
    isEdit?: boolean
    saveNote(note: Note): void;
    deleteNote?(): void
}

export default function NoteForm(props:Props) {

    const isEdit = props.isEdit;
    const renderFormTitle = () => isEdit ? <span>Edit Note</span> : <span>Add Note</span>;

    const renderFormButtons = () => isEdit ?
        (<>
            <button type='submit' className="btn btn-primary float-right">Save Note</button>
            <button onClick={props.deleteNote} className='btn btn-danger float-end'>Delete Note</button>
        </>) :
        (<button type='submit' className="btn btn-primary float-right">Save Note</button>);

    const title = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLTextAreaElement>(null);
    const [redirect, setRedirect] = useState<ReactElement>();
    function saveNote(e: FormEvent) {
        e.preventDefault();
        if (title && title.current && description && description.current) {
            const note: Note = {
                id: ('' as any) as number,
                title: title.current.value,
                description: description.current.value,
                date: dateFormat(new Date(), 'mmm dd, yyyy'),
                time: dateFormat(new Date(), 'HH:MM')
            }
            setRedirect(<Redirect to='/portfolio/react-notes'/>);
            props.saveNote(note);
        }

    }


    return (
        <div className="card">
            <div className="card-header">
                {renderFormTitle()}
            </div>
            <div className="card-body">
                <form onSubmit={saveNote}>
                    <div className="form-group">
                        <p><input defaultValue={props.currNote !== undefined ? props.currNote.title : ''} ref={title}
                                  className='form-control'/></p>
                        <p><textarea defaultValue={props.currNote !== undefined ? props.currNote.description : ''}
                                     ref={description} rows={10}
                                     className='form-control'/></p>
                    </div>
                    {renderFormButtons()}
                    {redirect}
                </form>
            </div>
        </div>
    );
}
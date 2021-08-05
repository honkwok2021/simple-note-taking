/*Hon Pan Kwok 808481863*/
import React, { useState } from 'react'
import{Link, useParams} from 'react-router-dom';
import{v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave} from '@fortawesome/free-solid-svg-icons'
import './style/style.css'

export function Edit({ notes, setNotes }){
    const { index } = useParams();
    const [newUpdate, setNewUpdate] = useState({
        id:notes[index].id,
        title:notes[index].title,
        content:notes[index].content
    });

    function updateTitle(e){
        setNewUpdate({...newUpdate, title: e.target.value, id:uuidv4()});
    }

    function updateContent(e){
        setNewUpdate({...newUpdate, content: e.target.value, id:uuidv4()});
    }

    function saveNew() {
        setNotes(note => {
            let newNotes = [...note];
            // replace the index with the updated note
            newNotes[index] = newUpdate;

            return newNotes;
        });
    }



    return(
        <div>
            <form >
                <input style={{marginTop:"8%"}} name='title' type='text' placeholder="Title" value={newUpdate.title} onChange={updateTitle} /> <br/><br/>
                <textarea name='content' className="textarea" placeholder='Note Content' value={newUpdate.content} onChange={updateContent} /><br/>
                <button onClick={saveNew} ><Link to = "/" ><FontAwesomeIcon icon={faSave}/> save update</Link></button>
            </form>
        </div>
    )
}
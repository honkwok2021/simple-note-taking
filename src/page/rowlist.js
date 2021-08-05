/*Hon Pan Kwok 808481863*/
import React from 'react'
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
import {style} from './style/style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEraser, faPlusSquare, faKeyboard} from '@fortawesome/free-solid-svg-icons'

export function RowList({notes, setNotes}){
    function DeleteNote(id){
        setNotes(notes.filter(n => n.id !== id))
    }

    const rowstyle={
        display:"flex",
        marginTop:"10%",
    }
    

    return(
        <div style={rowstyle} >
             

            {notes.map((note, index) =>(
                <div key={note.id} className="home">
                    <ul >
                        
                        <li>Title: {note.title}</li>
                        
                        
                    </ul>
                    <button onClick={()=>DeleteNote(note.id)} ><FontAwesomeIcon icon={faEraser} /> remove</button>
                    <button><Link to = {"/edit/" + index} > <FontAwesomeIcon icon={faKeyboard}/> edit</Link></button>
                </div>
            ))}
             
            
        </div>
    )
}
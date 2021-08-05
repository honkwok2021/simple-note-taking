/*Hon Pan Kwok 808484863*/
import React from 'react'
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
import {style} from './style/style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEraser, faPlusSquare, faKeyboard} from '@fortawesome/free-solid-svg-icons'
import { RowList } from './rowlist';
import Button from 'react-bootstrap/Button'
import './style/style.css'

export function Rows({notes, setNotes}){

    const createButtonStyle={
        marginTop: "10%",
    }


    return(
        <div style={{display: "flex"}} className="mainBody" >
             <Button className="AddNote" variant="light" style={createButtonStyle}>
            <Link to = "/create"  ><FontAwesomeIcon icon={faPlusSquare} />Add Note</Link>
            </Button>

            <RowList key={notes.id} notes={notes}  setNotes={setNotes} />
             
            
        </div>
    )
}
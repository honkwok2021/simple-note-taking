/*Hon Pan Kwok 808484863*/
import React from 'react';
import {useState, useEffect} from 'react';

import {Link, Route} from 'react-router-dom';
import{v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

export function CreateNote({setNotes}){
    const[form, setForm] = useState({
        id:"",
        title:"",
        content:"",
    });

    useEffect(()=>{
        let savedCreate = JSON.parse(sessionStorage.getItem('form'));
        if(savedCreate){
            setForm(savedCreate);
        }
    },[]);

    useEffect(() =>{
        sessionStorage.setItem('form', JSON.stringify(form));
    },[form] )

    function handleTitle(e){
        setForm({...form, title: e.target.value, id: uuidv4()});
    }

    function handleContent(e){
        setForm({...form, content: e.target.value});
    }

    

    function AddNote(){
      setNotes(note => [...note, form]);
      window.sessionStorage.clear();
      setForm({title:"", content:""});
    }

    return(
        <div className="createSection">
            <form >
                <div >
                    <input style={{marginTop:"8%"}} name='title' type='text' placeholder="Title" value={form.title} onChange={handleTitle}/> <br/><br/>
                    <textarea name='content' className="textarea" placeholder='Note Content' value={form.content} onChange={handleContent}/><br/>
                    <button onClick={AddNote} ><Link to = "/" ><FontAwesomeIcon icon={faPlusCircle}/> Add</Link></button>
                </div>
                
            </form>
            
        </div>
    )
}
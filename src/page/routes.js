/*Hon Pan Kwok 808481863*/
import React, { useEffect } from 'react';
import {useState} from 'react'
import {Switch, Route, Router} from 'react-router-dom';
import {Header, CreateNote, Rows} from '.'
import { Edit } from './edit';

export function Routes(){
    const [notes, setNotes] = useState([]); //need to use usestate here as need this to direct us to different note address
    

    
    // useEffect
    useEffect(()=>{
        let savedNotes = JSON.parse(localStorage.getItem('notes'));
        if(savedNotes){
            setNotes(savedNotes);
        }
    },[]);

    useEffect(() =>{
        localStorage.setItem('notes', JSON.stringify(notes));
    },[notes] )

    return(
        
            <Switch>
                
                <Route exact path = "/">
                    <Rows key={notes.id} notes={notes} setNotes={setNotes}/>
                </Route>
                <Route exact path ="/create">
                    <CreateNote setNotes={setNotes} />
                </Route>
                <Route path="/edit/:index">
                    <Edit key={notes.id} notes={notes} setNotes={setNotes} />
                </Route>
            
            </Switch>
        
        
    );
}
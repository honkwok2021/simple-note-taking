/*Hon Pan Kwok 808481863*/
import React from 'react';
import logo from '../logo.svg';
import './style/style.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDumpsterFire} from '@fortawesome/free-solid-svg-icons'

export function Header(){

    function ClearAll(){
        localStorage.clear();
        window.location.reload();
    }

    return(
        <div className="header">
            Note Taking App
            <img src={logo} className="App-logo" alt="logo"/>
            <nav>
               <Link to="/">Home</Link>
               <Link to = "/create" >create</Link>
               

               <button onClick={ClearAll}><FontAwesomeIcon icon={faDumpsterFire} /> Clear all</button>
            </nav>
            
        </div>
    );
}
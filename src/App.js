import Contacts from './Components/Contacts';
import ChatWindow from './Components/ChatWindow';
import SideWindow from './Components/SideWindow';
import {Link,Route} from "react-router-dom";
import React, { useState } from 'react'

import './Apps.css';
import './styles/layout.css';
import './styles/chatWindow.css';


function App() {
  const[text,setText]=useState("");

  return (
  <div className="wrap">
    <div className="heading">
      <h1 className="head">Chatting Application</h1>
    </div>
    <div className="App">
      <div className="side">
      <div className="contactheading"><h4 className="contacthead">Contacts</h4></div>
      <div className="contacts">
        {
          Contacts.map((contact,index)=>{
            return (
              <Link className="link" to={"/home/"+contact.id+"/"+contact.name} key={index}>
              <ChatWindow  id={contact.id} img={contact.image} name={contact.name}/>
              </Link>
              )
            })
          }
      </div>
      </div>
      <div className="screen">
        <Route path="/home/:id/:name"><SideWindow text={text} setText={setText}/></Route>
      </div>
  </div>
  </div>
  );
}

export default App;

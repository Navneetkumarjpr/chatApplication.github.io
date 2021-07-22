import React, { useState } from 'react'
import { withRouter } from 'react-router';

const SideWindow = (prop) => {
    const[display,setDisplay]=useState([]);
    // console.log(prop.match.params.name);
    const submit=(e)=>{
        // console.log("hello")
       setDisplay([...display,{
           id:display.length,
           text:prop.text
       }])
    }
    return (
        <div className="sidewindow" key={prop.match.params.id}>
            <div className="windowhead">
               <h2 className="sidechathead">{prop.match.params.name}</h2>
            </div>
            <div className="chats"  >
               {
                   display.map(item=>{
                       return <div className="message" key={item.id}>{item.text}</div>
                   })
               }
            </div>
            <div className="bar">
               <input className="typebar" placeholder="Enter the message" onChange={e => prop.setText(e.target.value)} type="text"/>
               <button className="submit" onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default withRouter(SideWindow)

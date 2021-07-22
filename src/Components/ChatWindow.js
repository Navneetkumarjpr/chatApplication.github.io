import React from 'react'

const ChatWindow = ({id,img,name}) => {
    return (
            <div className="window" key={id} >
                <div className="img">
                    <img className="image" src={img} alt="" />
                </div>
                <div className="chatwindow">
                    <div className="headname">
                        <h4 className="name">{name}</h4>
                    </div>
                    <div className="mess">
                        <h5 className="hh"></h5>
                    </div>
                </div>
            </div>
    )
}

export default ChatWindow

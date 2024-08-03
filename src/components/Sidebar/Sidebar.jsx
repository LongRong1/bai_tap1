import React, { useState } from "react";
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {


    const [extended,setExtended] = useState(false)

    return(
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="" className="menu" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="N" title="New Chat" />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="M" />
                        <p>What is recent...</p>
                    </div>
                </div>
                :null
                }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="?" title="Question" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="A" title="History" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="S" title="Setting" />
                    {extended?<p>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
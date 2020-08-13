import React from 'react';
import './MemberListTile.component.css';
import usericon from "../../assets/usericon.png";

interface MemberProps{
    name: string;
    assigned_role: string;
    icon? : any;
}

const Member = (props: MemberProps) => (
    <aside className="Member-info">
        <div className="member">
        <img className="user-image" src={usericon} alt="User Icon"/>
        <ul className ="List">
            <li className="member-name">{props.name}</li>
            <li className="member-role">{props.assigned_role}</li>
        </ul>
        </div>
    </aside>
)

export default Member

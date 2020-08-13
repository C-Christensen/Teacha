import React from 'react';
import './button.styles.css';
import {Link} from 'react-router-dom';

interface BtnProps {
    title: string,
    className?: string,
    navigation: string,
    onClick?: any,
    value?: any
}

const Btn = (props: BtnProps) => {
    return (
        <div className="custom-input">
            <Link to = {props.navigation}>
              <button onClick={props.onClick} value={props.value} className={props.className} >{props.title}</button>  
            </Link>
        </div>
    )
}

export default Btn;

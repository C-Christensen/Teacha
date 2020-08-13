import React from 'react';

import { ReactComponent as Stat1} from '../../assets/svg/stat1.svg';
import { ReactComponent as Stat2} from '../../assets/svg/stat2.svg';
import { ReactComponent as Stat3} from '../../assets/svg/stat3.svg';

import './stat.styles.css';

interface StatProps {
    image: string,
    title: string,
    text: string
}

const Stat = (props: StatProps) => {
    let icon;
    switch(props.image) {
        case "stat1":
            icon = <Stat1 className="stat-icon" />;
            break;
        case "stat2":
            icon = <Stat2 className="stat-icon"/>;
            break;
        case "stat3":
            icon = <Stat3 className="stat-icon"/>;
            break;
        default:
            return <div/>;
    }

    return (
        <div className="stat-wrapper">
            {icon}
            <h3 className="stat-title">{props.title}</h3>
            <p className="stat-info">{props.text}</p>
        </div>
    )
}

export default Stat;
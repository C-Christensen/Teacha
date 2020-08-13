import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

// import Logo from '../../assets/logo.png';

import './mentor-circle-card.styles.css';

interface MentorCircleCardProps {
    title: string,
    members: number,
    link: string,
    src?: any
}

const MentorCircleCard = (props: MentorCircleCardProps) => {
    return (
        <motion.div
           whileHover={{
               scale: 1.05,
               transition: { duration: .5}
           }}
        >
            <div className="card-wrapper">
                <div className="card-body">
                   <img className="card-image" src={props.src} alt="Mentor Circle Logo"/>
                    <p className="card-title"> {props.title} </p>
                    <p className="card-members">{props.members} Members</p>
                </div>

                <div>
                    <Link to="/mentoringcircle">
                        <button className="card-button">Go to Circle</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default MentorCircleCard;
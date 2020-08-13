import React from "react";

import { ReactComponent as Step1} from '../../assets/svg/step1.svg';
import { ReactComponent as Step2} from '../../assets/svg/step2.svg';
import { ReactComponent as Step3} from '../../assets/svg/step3.svg';


import './step.styles.css';

interface StepProps {
    title: string,
    text: string,
    img: string,
    number: string
    swapped?: boolean
}

const Step = (props: StepProps) => {
    let icon;
    switch(props.img) {
        case "step1":
            icon = <Step1 className="step-icon" />;
            break;
        case "step2":
            icon = <Step2 className="step-icon"/>;
            break;
        case "step3":
            icon = <Step3 className="step-icon"/>;
            break;
        default:
            return <div/>;
    }
    return (
        <div className={`${props.swapped ? 'swapped' : ''} step-wrapper`} >
            
            <div className="step-info">
                <div className="step-heading">
                    <div className="step-number">
                        {props.number}
                    </div>
                    <h2 className="step-title">{props.title}</h2>
                </div>

                <p className="step-text">{props.text}</p>
            </div>
            {icon}
        </div>
    )
}

export default Step;
import React from "react";

import { ReactComponent as Survey } from "../../assets/svg/survey.svg";
import { ReactComponent as FindExperts } from "../../assets/svg/find-experts.svg";
import { ReactComponent as ExpertLecture } from "../../assets/svg/expert-lecture.svg";
import { ReactComponent as Discussion } from "../../assets/svg/discussion.svg";
import { motion } from "framer-motion";

import "./method-card.styles.css";

interface MethodCardProps {
  title: string;
  step: string;
  img: string;
  color?: boolean;
}

const MethodCard = (props: MethodCardProps) => {
  let icon;
  switch (props.img) {
    case "survey":
      icon = <Survey className="step-icon" />;
      break;
    case "findExperts":
      icon = <FindExperts className="step-icon" />;
      break;
    case "expertLecture":
      icon = <ExpertLecture className="step-icon" />;
      break;
    case "discussion":
      icon = <Discussion className="step-icon" />;
      break;
    default:
      return <div />;
  }

  return (
    <motion.div
      className={`${props.color ? "orange" : ""} method-card-wrapper`}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
    >
      {icon}
      <p className="step">Step {props.step}:</p>
      <p className="title">{props.title}</p>
    </motion.div>
  );
};

export default MethodCard;

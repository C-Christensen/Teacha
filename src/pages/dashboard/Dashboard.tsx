import React from "react";
import MentorCircleCard from "../../components/mentor-circle-card/mentor-cirlce-card.component";
import Navbar from "../../components/navbar/navbar";
import "../../components/navbar/navbar.css";

import Bio from "../../components/bio/bio.component";
import "./Dashboard.styles.css";

import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import PurpleLine from "../../assets/svg/purpleline.svg";

// Alert message
import Alert from "../../components/alert-box/alert";
import "../../components/alert-box/alert.css";
import DashboardCircles from "../../data/dashboard-circles";

import { motion } from "framer-motion";

const DashBoard = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <Alert />
      <div className="dashboard">
        <div>
          <Bio />
        </div>
        <div className="mentoring-circle-wrapper">
          <div className="dashboard-heading-wrapper">
            <h2 className="dashboard-heading">Your Mentoring Circles</h2>
            <img className="purple-line" src={PurpleLine} alt="purple-line" />
          </div>

          <div className="card-items">
            {DashboardCircles.map((circle) => {
              return (
                <MentorCircleCard
                  key={circle.id}
                  src={circle.image}
                  title={circle.title}
                  members={circle.members}
                  link="mentoringcircle"
                />
              );
            })}

            <motion.div
              className="addCard-wrapper"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
            >
              <p className="addCard-title">Add New Mentoring Circle</p>
              <Link to="/search">
                <AddCircleOutlineIcon className="addCard-button" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

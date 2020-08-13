import React from "react";
import { Link } from "react-router-dom";

import Stat from "../../components/stat/stat.component";
import Step from "../../components/step/step.component";
import MethodCard from "../../components/method-card/method-card.component";

import { ReactComponent as WhiteWave } from "../../assets/svg/white-wave.svg";
import HorizontalLine from "../../assets/svg/horizontal-line-purple.svg";
import Teacher from "../../assets/svg/teacher-home.svg";
import Problem from "../../assets/svg/problem.svg";
import Mission from "../../assets/svg/mission.svg";

import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

import "./section-one.styles.css";
import "./section-two.styles.css";
import "./section-three.styles.css";
import "./section-four.styles.css";
import "./carrosel";

export class HomePage extends React.Component<{}> {
  render() {
    return (
      <div>
        <section className="section-one">
          <motion.div
            className="navigation"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <img src={logo} className="logo" alt="Techa Logo" />
            <div className="nav-buttons">
              <Link to="/signup">
                <motion.button className="login" whileHover={{ scale: 1.1 }}>
                  Login
                </motion.button>
              </Link>
              <Link to="/signup">
                <motion.button className="sign-up" whileHover={{ scale: 1.1 }}>
                  Sign-up
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="home-info-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <img src={Teacher} className="teacher" alt="teacher icon" />

            <div className="home-info">
              <h2 className="title-two">Welcome to</h2>
              <div className="logo-section">
                <h1 className="title-one">Teacha</h1>
              </div>
              <img
                src={HorizontalLine}
                className="underline-title"
                alt="purple line"
              />
              <p className="home-text">
                A web-based platform created with the goal of{" "}
                <span
                  className="txt-rotate"
                  data-period="2000"
                  data-rotate='[ "empowering ", "encouraging ", "supporting ", "connecting  " 
                                    ]'
                ></span>{" "}
              </p>

              <p className="home-text2">
                teachers of color through group mentoring.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="section-two">
          <div className="section-two-wrapper">
            <motion.div
              className="problem"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <img className="problem-icon" src={Problem} alt="problem icon" />
              <div className="problem-info">
                <h2 className="problem-heading">The Problem</h2>
                <p className="problem-text">
                  While the number of teachers has continually increased over
                  the years, studies show that an average of 20% of educators of
                  color are leaving the teaching profession because they feel
                  undervalued. Research has shown that the lack of diversity
                  among the teaching faculty has negative effects on high-school
                  completion, discipline rates, and test scores for students of
                  color.
                </p>
              </div>
            </motion.div>

            <div className="problem-stats">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Stat
                  image="stat1"
                  title="Statistic One"
                  text="Less than one in five U.S. public school teachers are individuals of color, 
                                 while approximately half — 49 percent — of public elementary and secondary school 
                                 students are individuals of color. "
                />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Stat
                  image="stat2"
                  title="Statistic Two"
                  text="To fully represent today’s students, about 29,500 of Washington’s 64,700 teachers 
                                 would have to be people of color. That’s about 22,300 more people of color than those who 
                                 currently teach here."
                />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Stat
                  image="stat3"
                  title="Statistic three"
                  text=" A study of more than 100,000 black students found that low-income
                                  boys who had at least one black teacher in grades 3-5 were almost 40 percent less likely 
                                  to drop out of high school."
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-three">
          <motion.div
            className="mission"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            <img className="mission-img" src={Mission} alt="Mission icon" />
            <div className="mission-info">
              <h2 className="mission-info-title">Our Mission</h2>
              <p className="mission-info-text">
                We are committed to develop a safe and welcoming online platform
                for teachers of color to creating meaningful connections with
                their peers through a group-based mentoring model.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Step
              title="Create an Enviroment of Value and Support"
              text="In the effort to build a feeling of value and appreciation, 
                                    our goal is to create a platform where teachers from all levels 
                                    can provide mutual support on topics of interest."
              img="step1"
              number="1"
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Step
              title="Increase Connections"
              text="Mentorship relationships can be rich and rewarding for the 
                                    person being mentored and for the mentor themselves. The goal of 
                                    the platform is to allow members to expand their network by connecting 
                                    to other individuals who share similar experiences and background."
              img="step2"
              number="2"
              swapped={true}
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Step
              title="Meaningful Experiences"
              text="Our goal is to provide a platform for support and career enrichment, 
                                    where users can share their knowledge and help each other identify opportunities
                                    in their career."
              img="step3"
              number="3"
            />
          </motion.div>
        </section>

        <section className="section-four">
          <WhiteWave className="white-wave" />
          <div className="method-container">
            <div className="method-cards">
              <MethodCard
                title="Survey Users"
                step="1"
                img="survey"
                color={false}
              />
              <MethodCard
                title="Find Expert"
                step="2"
                img="findExperts"
                color={true}
              />
              <MethodCard
                title="Expert Lecture"
                step="3"
                img="expertLecture"
                color={true}
              />
              <MethodCard
                title="Discussion"
                step="4"
                img="discussion"
                color={false}
              />
            </div>
            <div className="method-info">
              <h1 className="method-title">The Teacha Mentoring Method</h1>
              <p className="method-text">
                The method focus on group mentoring known as mentoring circles.
                Educators can find and join mentoring circles consisting of
                other professionals in the industry. Once a member has joined
                they will be able to interact with their mentors to discuss
                topics of their interest.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;

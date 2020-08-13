import React from 'react';
import Logo from '../../assets/logo-no-text.png';
import './SignupPage.styles.css';
import ValidatedSignUp from '../../components/signup-form/signup-form';
import { motion } from 'framer-motion';

const containerVarients = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', delay: 0.5,
      damping: 10,
      stiffness: 50
    }
  }
}

export class SignupPage extends React.Component {
  
  render() {
      return (
      <body className="signup-body">
        <div className="signup-wrapper">
          <motion.div className="signup-left-side"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: .5, duration: 1.5 }}
          >
            <div className="left-side-wrapper">
              <a href="/"><img className="signup-logo" src={Logo} alt="Teacha logo (multiple hands of people of color together)"/></a>
              <h2 className="signup-heading2">A place where you can connect with fellow teachers of color.</h2>
              <h1 className="signup-heading1">Empowering Teachers of Color</h1>
            </div>
          </motion.div>
          <motion.div className="signup-right-side"
            variants={containerVarients}
            initial="hidden"
            animate="visible"
          >
              <ValidatedSignUp />
              <div className="signin">
                <p>Already have an account? <a href="../dashboard/Dashboard">Sign in.</a></p>
              </div>
          </motion.div>
        </div>
      </body> 
      );
    
    }
  }
  
export default SignupPage;

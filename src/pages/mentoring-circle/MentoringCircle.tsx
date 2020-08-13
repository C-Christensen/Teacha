import React from 'react';
import Member from '../../components/member-list/Member'
import MemberListTile from '../../components/member-list/MemberListTile';
import Navbar from '../../components/navbar/navbar'
import '../../components/navbar/navbar.css'
import MyCalendar from '../../components/upcoming-events/calendar-upevents' 
import ActivityCards from '../../components/recent-activity/recent-activity-card';
import Btn from '../../components/button/button';
import './MentoringCircle.styles.css';
import '../../components/member-list/MemberListTile.component.css';
import SeattleSchoolLogo from '../../assets/seattleschool-logo.png';
import ClassroomImg from '../../assets/known.png';

interface Imentoringcirclestate{
  hasjoined:boolean
}
export class MentoringCircle extends React.Component<{}, Imentoringcirclestate> {
  constructor(props: any) {
    super(props);
    this.state = {hasjoined:false};
  }

  togglejoined=()=> {
    this.setState((prevstate,props)=>
    {return{hasjoined:!prevstate.hasjoined}}
    )
  }
  render() {
    return (
        <div className="mentoringcircle-wrapper">
            <header>
              <Navbar/>
            </header>
            <body>
               <div className="body-wrapper">
                <div className = "left-side">
                    <div className="circle-info">
                     {/* need to add img logo */}
                      <img className="SeattleSchoolLogo" src={SeattleSchoolLogo} alt="seattle mentoring circle logo"/>
                      <h1 className="circle-title">Welcome to Seattle School District Mentoring Circle!</h1>
                     <div className="bulletin-board">
                      <h2 className="Seattle-statement">Teachers of Seattle Schools District group is for teachers of color in
                      Seattle Public School District teaching K-12 to connect and collaborate.</h2>
                      <p className="circle-mission">Our circles main mission is to promote diversity in Seattle School District and engage in active collaborate sessions in professional development. 
                      This circle is for teachers of color who wishes to expand their knowledge and share your thoughts to be empowered and to empower their students for the best learning experience.
                        <br></br>
                        <br></br>
                        We focus on group mentoring, inspirational sessions, in-person events and new teachers of color who recently started their career.
                        We would love to connect with each teachers to support them in the best way we can to motivate your career. This mentoring circle is a structured and trusting relationship that brings people together with caring individuals who offer guidance, support and encouragement aimed at developing competence in personal and professional areas. We would love to connect with each teacher to support them in the best way we can. 
                      </p>
                      <div className="group-rules-content">
                      <h3 className="group-rules">Please, before joining this group read the rules below:</h3>
                      <p className="rules">
                        <b>1.</b> Be Kind: We’re all in this together to create a welcoming environment. 
                        <br></br>Let’s treat everyone with respect. Healthy debates are natural, but kindness is required.
                        <br></br>
                        <b>2.</b> No Hate Speech or Bullying: Make sure everyone feels safe. 
                        <br></br>Bullying of any kind isn’t allowed, and degrading comments about things like 
                        <br></br>race, religion, culture, sexual orientation, gender or identity will not be tolerated.
                        <br></br>
                        <b>3.</b> No Spam: Spam and irrelevant links aren’t allowed
                        <br></br>
                        <b>4.</b> Respect Everyone’s privacy: Being part of this group requires mutual trust. 
                        <br></br>Authentic, expressive discussions make groups great, but may also be sensitive and private. 
                        <br></br>What’s shared in the group should stay in the group.
                      </p>
                      </div>
                      </div>
                    <div className="group-photo">
                      <img className="DiverseClassroom" src={ClassroomImg} alt="diversity in classroom"/>
                    </div>
                    </div>
                </div>

                <div className = "right-side">
                  <div className="event-calendar-wrapper">
                  <div className="Joingroup-button">
                     <Btn navigation="/mentoringcircle" className="signup-button " title={this.state.hasjoined ?"You've joined the group":"Join Group"} onClick={this.togglejoined}/> 
                  </div>
                      <div className="Calendar">
                          <MyCalendar/>
                      </div>
                      <div className="Activity">
                          <ActivityCards/>
                      </div>
                  <MemberListTile>
                    <Member name ="Prisha Khan" assigned_role="Admin"/>
                    <Member name ="Danielle James" assigned_role="Admin 2"/>
                    <Member name ="Mary Jane" assigned_role="Member"/>
                    <Member name ="Miguel Rodriguez" assigned_role="Member"/>
                    <Member name ="Katherine Mitchell" assigned_role="Member"/>
                    <Member name ="Josephine Johnson" assigned_role="Member"/>
                    <Member name ="Tina Cashman" assigned_role="Member"/>
                    <Member name ="Aubrey Wahler" assigned_role="Member"/>
                    <Member name ="Patricia Stewart" assigned_role="Member"/>
                    <Member name ="Alex Nelson" assigned_role="Member"/>
                    <Member name ="Miranda Diggs" assigned_role="Member"/>
                    <Member name ="Quon Ngyugen" assigned_role="Member"/>
                  </MemberListTile> 
                </div>
                </div>
            </div>
            </body>
        </div>
);
  }
}

export default MentoringCircle;

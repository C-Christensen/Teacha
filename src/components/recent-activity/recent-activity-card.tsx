import React from 'react';
import Activity from './recent-activity'
import {RecentActivity} from './recent-activity'
import './recent-activity-card-styles.css'
import Empower from '../../assets/empower.png';
import AddedFriend from '../../assets/add-friend.png';
import Notes from '../../assets/notes-icon.png';



class ActivityCards extends React.Component {
    render(){
        return (
            <div className="recent-act-wrapper">
                <div className="recent-act-title">
                    <h3>Recent Activity</h3>
                </div>
                <div>
                    <Activity activityItems={this.activity()}/>
                </div>
            </div>
        );
    }

    activity(): RecentActivity[] {
        return[
          {title: 'Teacher Appreciation Notes', description: '(Uploaded)', img: Notes, alt: 'Notes for teacher appreciation'},
          {title: 'Mary Jane has joined your circle', img: AddedFriend, alt: 'A friend added you'},
          {title: 'Word of the Day (Empower)', description: 'You\'re amazing!', img: Empower, alt: 'Empower phrase of the day'}
        ]
      }


}

export default ActivityCards;
import React, {Component} from 'react';
import './recent-activity-styles.css'



export interface RecentActivity {
    title: string
    description?: string
    img?: any
    alt: string
}

interface RecentActivityProps {
    activityItems: RecentActivity[]
}

class Activity extends Component<RecentActivityProps, RecentActivity> {
    render(){
        return (            
            (this.activity())  
        )
    }

    private activity(){
        return(
            this.props.activityItems.map((activity) =>
            <div className="act-wrapper">
                <div>
                    <img className="activity-image" src={activity.img} alt={activity.alt} />
                </div>
                <div className="act-info">
                    <h5 className="act-title">{activity.title}</h5>
                    <p className="act-description">{activity.description}</p>
                </div>
            </div>
            )
        )
    }
}

export default Activity;
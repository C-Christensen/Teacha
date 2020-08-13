import React from 'react';
import './calendar-styles.css'

 
class MyCalendar extends React.Component {
    

   render(){
        return (
            <div className="calendar-wrapper">
                <div className="calendar-title">
                    <h3>Upcoming Events</h3>
                </div>
                    <iframe src="https://calendar.google.com/calendar/embed?height=280&amp;wkst=1&amp;bgcolor=%237986CB&amp;
                        ctz=America%2FLos_Angeles&amp;src=Y2xhc3Nyb29tMTAxNTI4NDE1MjA1NzcyNTAyMjU0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;
                        color=%23F6BF26&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;mode=AGENDA" width="430" 
                        height="280" scrolling="no">
                    </iframe>
            </div>
         );
    }

   }
  
export default MyCalendar;
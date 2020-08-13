import React from 'react';
import Navbar from '../../components/navbar/navbar';
import SearchCircle from '../../assets/search-mentoring-circle.png';
import MentorCircleCard from '../../components/mentor-circle-card/mentor-cirlce-card.component';
import './Search.styles.css';
import SearchIcon from '../../assets/search-icon.png';
import newCircles from '../../data/new-circles-json';

export class SearchPage extends React.Component< {}, {}> {

    state = { // Set the default state of the search
      search: ""
    }
    
    updateSearch (event: { target: { value: any; }; }) { // Get the value passed to the input value and set as the state
        this.setState({search: event.target.value})
    }

    render() {
      // Filtered mentoring circles based on their title and the index of the 
      // return nothing if mentoring circle is not found
      
      newCircles.filter((data: any)=>{
        if(this.state.search == null)
            return data
        else if(data.title.toLowerCase().includes(this.state.search.toLocaleLowerCase())){
            return data
          }
          return null;
      }).map((data) =>(
        <div>
          <MentorCircleCard src={data.image} title={data.title} members={data.size} link="mentoringcircle" />
        </div>
      ));

      let filteredCircles = newCircles.filter(
        (circle) => {
          return circle.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
     
      return (
        <div className="search-wrapper">
          <header>
            <Navbar/>
          </header>
          <body>
            <div className="search-heading-wrapper">
              <h1 className="search-heading-left">Join New Mentoring Circles</h1>
              <div className="heading-img">
                <img className="search-heading-right" src={SearchCircle}  alt="Woman searching for mentoring circle" />
              </div>
              <div className="seach-bar">
                <input className="search-input" placeholder="Search for a mentoring circle.. " 
                  onChange={this.updateSearch.bind(this)} value={this.state.search}/>
                <div className="search-btn">
                  <img className="magnifying-glass" src={SearchIcon}  alt="Magnifying glass" />
                </div>
              </div>
            </div>
            <h3 className="search-recommend-heading">Recommendations for You: </h3> 
            <div className="search-results">
                {filteredCircles.map((circle) => {
                  return <MentorCircleCard src={circle.image} title={circle.title} members={circle.size} link="mentoringcircle" /> 
                })}
            </div>
          </body>
          
        </div>

      );
    }
  }
  
export default SearchPage;

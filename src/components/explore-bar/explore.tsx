import React from 'react';
import Dropdown from './dropdown/dropdown';
import Btn from '../button/button';
import './explore.styles.css';
import MentorCircleCard from '../mentor-circle-card/mentor-cirlce-card.component';
import Toggle from "../../components/toggleSwitch/toggleSwitch";
import SearchIcon from '../../assets/search-icon.png';
import newCircles from '../../data/new-circles-json';

interface ExploreBarState{
  show: boolean,
  search: string,
  clearSearch: boolean
}

export class ExploreBar extends React.Component<{}, ExploreBarState> {

    constructor( props: any ){
        super(props)  
        this.state = {
          search: "",
          show: false,
          clearSearch:false
      };

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    updateSearch (event: { target: { value: any; }; }) { // Get the value passed to the input value and set as the state
        this.setState({search: event.target.value})
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({show: !show})
        this.setState((prevstate,props) =>{
          return{clearSearch:!prevstate.clearSearch}
        })
    }
    
    render() {

      newCircles.filter((data: any) => {
        if(this.state.search == null)
            return data
        else if(data.title.toLowerCase().includes(this.state.search.toLocaleLowerCase())){
            return data
          }
        return null;
      }).map(data=>{
        return(
        <div>
            <MentorCircleCard src={data.image} title={data.title} members={data.size} link="mentoringcircle" />
        </div>
      )})

      let filteredCircles = newCircles.filter(
        (circle) => {
          return circle.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      )

    
        return(
            <div className="explore-wrapper">
                <div className="explore-bar">
                    <form className="explore-bar" action="action_page.php">
                        <input type="text" placeholder="Search.." name="search"
                            onChange={this.updateSearch.bind(this)} value={this.state.search}
                        />
                        <div className="search-btn">
                            <img className="magnifying-glass-explore" src={SearchIcon}  alt="Magnifying glass" />
                        </div>
                    </form>          
                    <div className="sort-checkbox-wrapper">
                        <div className="dropdown-wrapper">
                            <Dropdown />
                        </div>
                        <div className="check-wrapper">
                            <Toggle name = "Mentoring Circles" toggled ={true}/>
                            <Toggle name = "People" toggled ={false}/>
                        </div>
                    </div>
                </div>
                <div className="search-btn">
                    <Btn navigation="../explore/ExplorePage" className="signup-button" title={this.state.clearSearch?"Clear Search":"Search"} 
                        onClick={this.toggleDiv} /> 
                        {this.state.show && // when show is true, display the mentoring circles filtered by the search bar
                             <div className="search-results">
                                 {filteredCircles.map((circle) => {
                                   return <MentorCircleCard src={circle.image} title={circle.title} members={circle.size} link="mentoringcircle" /> 
                                 })}
                             </div>
                        }
                </div>
            </div>
        )
    }
}


export default ExploreBar;


                
                
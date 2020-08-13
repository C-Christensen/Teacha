import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './ExplorePage.styles.css';
import Explore from '../../assets/men-flying.png';
import ExploreBar from '../../components/explore-bar/explore';

export class ExplorePage extends React.Component {

      render() {
        return (
            <div>
                <header>
                    <Navbar/>
                </header>
                <body>
                <div className="explore-heading-wrapper">
                    <h1 className="explore-heading-left">Explore Your Interests</h1>
                    <div className="heading-img">
                        <img className="explore-heading-right" src={Explore}  alt="Man flying (exploring his surroundings)" />
                    </div>
                </div>
                <div className="extended-search">
                    <h3 className="explore-heading3">Looking for a person or a mentoring circle?</h3>
                    <ExploreBar />
                </div>         
                </body>
            </div>
        )
    }
}

export default ExplorePage;
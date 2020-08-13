import React from 'react';
import './MemberListTile.component.css';

class Tile extends React.Component{

    render(){
        return(
            <div className= "memberlist-wrapper" >
                <div className="memberlist-title">
                <h3>List of Members:</h3>
                </div>
                
                <div className="memberlist">
                {this.props.children}
                </div>
            </div>
        )
    }
}

export default Tile
import React from "react";

import './toggleSwitch.css';


interface ToggleProps{
    name:string,
    toggled: boolean
}

interface ToggleState {
    checked: boolean
}


class Toggle extends React.Component<ToggleProps,ToggleState> {
    constructor(props:any) {
		super(props);
		
		this.state = {
			checked: this.props.toggled
        };
        this.onToggleSwitchChange = this.onToggleSwitchChange.bind(this);
	}

    onToggleSwitchChange() {
        console.log(`Before Toggled: ${this.state.checked}`)
		this.setState({
            checked: !this.state.checked
        });
        // console.log(`After Toggled: ${this.state.checked}`)
	}
    
    render() {
        return (
            <div className = "toggle-wrapper">
                <div className = "toggle-text">
                    <h2 className = "toggle-text">{this.props.name}</h2>
                </div>

                <div className = "toggle">
                    <label className = "switch">
                        <input type = "checkbox" checked={this.state.checked} onChange = {this.onToggleSwitchChange}/>
                        <span className = "slider round"></span>
                    </label>
                </div>
            </div>
            
        )
    }
}

export default Toggle
import React from "react"

class Alert extends React.Component {
    render() {
        return(
            <div className ="alert">
                <span className = "closebtn">&times;</span> 
                <strong>Update Profile!</strong> Indicates you still need fill out the profile section
            </div>
        )
    }
}
export default Alert;
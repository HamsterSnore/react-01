import React from "react";

class FolderPath extends React.Component{
    render(){
        let path = "/";
        if (this.props.project){
            path += ` ${this.props.project.name} `;
        }
        if (this.props.task){
            path += ` / ${this.props.task.name}`
        }
        return(
            <h4 className="text-light-grey">{path}</h4>
        )
    }
}

export default FolderPath;
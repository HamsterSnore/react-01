import React from "react";
import FolderPath from "../components/FolderPath";
import Stopwatch from './Stopwatch'

class Tasks extends React.Component {
    defaultTotalSeconds = 5;
    selectedMode = 1;
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    };

    render() {
        return (
            <div>
                <FolderPath project={{name: "Project01"}} task={{name: "Task01"}} />
                <div className="flex flex-col items-center justify-center">
                    <Stopwatch />
                </div>
            </div>
        )
    }
}

export default Tasks;
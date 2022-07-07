import React from "react";
import FolderPath from "../components/FolderPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [{ id: "120380912380912", name: "Project 01" }, { id: "32423432423423", name: "Project 02" }],
            createProjectModalOpen: false
        }
        this.handleCreateNewProjectClick = this.handleCreateNewProjectClick.bind(this);
    }

    handleCreateNewProjectClick(){
        this.setState({
            createProjectModalOpen: true
        })
    }

    render() {
        return (
            <div>
                <FolderPath />
                <div className="py-4 text-light-grey">
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h1 className="text-2xl">Projects</h1>
                        <h6 onClick={this.handleCreateNewProjectClick} className="border px-4 py-2 rounded-md">+ Create new project</h6>
                    </div>
                    {this.state.projects.length === 0 &&
                        <div className="flex flex-row p-6 h-64 my-4 justify-center items-center">
                            There aren't any projects yet. Create a new one !
                        </div>
                    }
                    {this.state.projects.length !== 0 &&
                        <div className="flex flex-row">
                            {this.state.projects.map(project => {
                                return (
                                    <div className="p-4 flex flex-col items-center">
                                        {this.state.createProjectModalOpen &&
                                        <div className="w-screen h-screen bg-black absolute top-0 left-0 flex flex-row justify-center items-center">
                                            <div className="w-1/2 h-1/2 bg-dark-blue rounded-md p-8">
                                                <h6>New project</h6>
                                                <input className="py-2 px-5 rounded my-2 w-full bg-transparent border" placeholder="Name (required)" type="text"></input>
                                                <input className="py-2 px-5 rounded my-2 w-full bg-transparent border" placeholder="Client (optional)" type="text"></input>
                                            </div>
                                        </div>}
                                        <div className="text-5xl">
                                            <FontAwesomeIcon icon={faFolder} />
                                        </div>
                                        <div className="" key={project.id}>{project.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Projects;
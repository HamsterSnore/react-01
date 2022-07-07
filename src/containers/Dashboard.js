import React from "react";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state =
        {
            startTime: null,
            time: new Date(),
            elapsedTime: null
        };
        this.setStartTime = this.setStartTime.bind(this);
    }

    setStartTime(){
        this.setState( state => ({
            startTime: this.state.time
        }));
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick(){
        let elapsed = this.getElapsedTimeInSeconds();
        this.setState({
            time: new Date(),
            elapsedTime: elapsed
        });
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    getElapsedTimeInSeconds(){
        console.log('getElapsedTimeInSeconds')
        if (this.state.startTime && this.state.time){
            if (this.state.time - this.state.startTime > 1000){
                let elapsedInMiliseconds = this.state.time - this.state.startTime;
                return Math.floor(elapsedInMiliseconds / 1000)
            }
        }
    }

    formatTime(totalSeconds){
        if (!totalSeconds){
            return;
        }
        let hours = "";
        let minutes = "";
        if (totalSeconds >= 3600){
            hours = Math.floor(totalSeconds/3600);
            totalSeconds -= hours * 3600;
        }

        if (totalSeconds >= 60){
            minutes = Math.floor(totalSeconds/60);
            totalSeconds -= minutes * 60;
        }

        return `${hours.toString().padStart(1,"0")}:${minutes.toString().padStart(2,"0")}:${totalSeconds.toString().padStart(2,"0")}`;
    }

    render(){
        return(
            <div className="text-white flex flex-col w-full h-full justify-between align-middle my-auto">
                <div className="flex flex-row">
                    <h1 className="text-xl border px-8 py-3 w-min rounded-t-md bg-medium-blue text-light-grey">Dashboard</h1>
                    <h1 className="text-xl border px-8 py-3 w-min border-l-0 rounded-t-md">Proyects</h1>
                    <h1 className="text-xl border px-8 py-3 w-min border-l-0 rounded-t-md">
                        <a href="/tasks">Tasks</a></h1>
                </div>
                <div className="border p-4 flex flex-row justify-between">
                    <div className="flex-col">
                        <h2>Número proyectos activos: 3</h2>
                        <h2>Horas acreditadas esta semana: 10 h</h2>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="border px-8 py-3">Proyectos</h6>
                    </div>
                </div>
                <div className="border p-4">
                    Clock: {this.state.time.toLocaleTimeString()}
                    <span onClick={this.setStartTime} className="mx-4">PLAY</span>
                    <span className="mx-4">PAUSE</span>
                    <span className="mx-4">Start Time = {this.state.startTime?.toLocaleTimeString()}</span>
                    <span className="mx-4">Time Elapsed = {this.formatTime(this.state.elapsedTime)}</span>
                </div>
            </div>
        )
    }


}

export default Dashboard;
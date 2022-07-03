import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faStop, faPlay } from '@fortawesome/free-solid-svg-icons'

class Tasks extends React.Component {
    defaultTotalSeconds = 5;
    selectedMode = 1;
    constructor(props) {
        super(props);
        this.state = {
            selectedMode: this.selectedMode,
            tasks: [],
            currentTimer: {
                startTime: null,
                remainingSeconds: this.defaultTotalSeconds,
                // STATUS
                // 0 - Initial
                // 1 - Running
                // 2 - Stopped
                status: 0,
                baseTime: this.defaultTotalSeconds
            }
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.selectWorkMode = this.selectWorkMode.bind(this);
        this.selectLittleRestMode = this.selectLittleRestMode.bind(this);
        this.selectBigRestMode = this.selectBigRestMode.bind(this);
    }

    start() {
        var time = new Date();
        console.log('Start/RemainingSeconds: ' + this.state.currentTimer.remainingSeconds);

        if (this.state.currentTimer.status === 0) {
            this.setState(state => ({
                currentTimer: {
                    startTime: time,
                    remainingSeconds: this.state.currentTimer.remainingSeconds,
                    status: 1,
                    baseTime: this.defaultTotalSeconds
                }
            }));
        }
        if (this.state.currentTimer.status === 2) {
            this.setState(state => ({
                currentTimer: {
                    startTime: time,
                    remainingSeconds: this.state.currentTimer.remainingSeconds,
                    status: 1,
                    baseTime: this.state.currentTimer.remainingSeconds
                }
            }));
        }
    }

    stop() {
        console.log('Stopping');
        this.setState(state => ({
            currentTimer: {
                startTime: null,
                remainingSeconds: this.state.currentTimer.remainingSeconds,
                status: 2
            }
        }));
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    tick() {
        this.setState(state => ({
            selectedMode: this.selectedMode
        }));

        if (this.state.currentTimer.startTime != null && this.state.currentTimer.status === 1) {
            var elapsedTimeInSeconds = Math.floor((new Date() - this.state.currentTimer.startTime) / 1000);
            let remainingSeconds = this.state.currentTimer.baseTime - elapsedTimeInSeconds;
            console.log('Tick/RemainingSeconds: ' + remainingSeconds);
            if (remainingSeconds > 0) {
                this.setState(state => ({
                    currentTimer: {
                        remainingSeconds: remainingSeconds,
                        startTime: this.state.currentTimer.startTime,
                        status: 1,
                        baseTime: this.state.currentTimer.baseTime
                    }
                }))
            }
            else {
                this.setState(state => ({
                    currentTimer: {
                        remainingSeconds: 0,
                        startTime: null,
                        status: 2,
                        baseTime: 1500
                    }
                }))
            }
        }


    }

    selectWorkMode(){
        this.selectedMode = 1;
    }

    selectLittleRestMode(){
        this.selectedMode = 2;
    }

    selectBigRestMode(){
        this.selectedMode = 3;
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    formatTime(totalSeconds) {
        if (!totalSeconds) {
            return "00:00"
        }
        let minutes = "";

        if (totalSeconds >= 60) {
            minutes = Math.floor(totalSeconds / 60);
            totalSeconds -= minutes * 60;
        }

        return `${minutes.toString().padStart(2, "0")}:${totalSeconds.toString().padStart(2, "0")}`;
    }

    render() {
        let boton = this.state.currentTimer.status !== 1 ?
            <span onClick={this.start} className="text-3xl"><FontAwesomeIcon icon={faPlay} /></span> :
            <span onClick={this.stop} className="text-3xl"><FontAwesomeIcon icon={faStop} /></span>
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-light-grey self-start mx-8">/ proyect01 / task01</h1>
                <div className="flex">
                    <div onClick={this.selectWorkMode} className={ this.state.selectedMode === 1 ? 'border px-8 py-2 my-3 mx-1 bg-light-grey rounded-md text-dark-blue font-regular text-lg' : 'border px-8 py-2 my-3 mx-1 rounded-md text-light-grey text-lg'}>
                        <span>Work hard</span>
                    </div>
                    <div onClick={this.selectLittleRestMode} className={ this.state.selectedMode === 2 ? 'border px-8 py-2 my-3 mx-1 bg-light-grey rounded-md text-dark-blue font-regular text-lg' : 'border px-8 py-2 my-3 mx-1 rounded-md text-light-grey text-lg'}>
                        <span>Rest</span>
                    </div>
                    <div onClick={this.selectBigRestMode} className={ this.state.selectedMode === 3 ? 'border px-8 py-2 my-3 mx-1 bg-light-grey rounded-md text-dark-blue font-regular text-lg' : 'border px-8 py-2 my-3 mx-1 rounded-md text-light-grey text-lg'}>
                        <span>Big Rest</span>
                    </div>
                </div>
                <div className="text-light-grey bg-transparent border rounded-md flex justify-center align-middle w-fit my-auto p-8 m-8">
                    <div className="flex flex-row justify-center align-middle">
                        <span className="text-9xl">{this.formatTime(this.state.currentTimer.remainingSeconds)}</span>
                    </div>
                    <div className="flex flex-col justify-around items-center ml-5">
                        <span className="text-3xl"><FontAwesomeIcon icon={faSliders} /></span>
                        {boton}
                    </div>
                </div>
            </div>

        )
    }
}

export default Tasks;
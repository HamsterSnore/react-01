import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

class Stopwatch extends React.Component {

    pomodoroTime = 25;
    restTime = 5;
    bigRestTime = 30;

    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: this.pomodoroTime,
            // Status of the countdown timer
            // 0 -> Initial state, stopped
            // 1 -> Running
            // 2 -> Stopped
            status: 0,
            // Countdown timer mode
            // 0 -> Working
            // 1 -> Rest
            // 2 -> Big rest
            mode: 0,
            tasks: [{
                name: "Task 01",
                time: 25,
                date: new Date().toLocaleDateString()
            }]
        }
        this.startCountdown = this.startCountdown.bind(this);
        this.stopCountdown = this.stopCountdown.bind(this);
        this.initWorkMode = this.initWorkMode.bind(this);
        this.initRestMode = this.initRestMode.bind(this);
        this.initBigRestMode = this.initBigRestMode.bind(this);
    }

    timerID = null;

    startCountdown() {
        this.setState({
            status: 1
        });
    }

    stopCountdown() {
        this.setState({
            status: 2
        })
    }

    initRestMode() {
        this.setState({
            mode: 1,
            timeRemaining: this.restTime,
            status: 0
        })
    }

    initWorkMode() {
        this.setState({
            mode: 0,
            timeRemaining: this.pomodoroTime,
            status: 0
        })
    }

    initBigRestMode() {
        this.setState({
            mode: 2,
            timeRemaining: this.bigRestTime,
            status: 0
        })
    }


    componentDidMount() {
        this.timerID = setInterval(() => this.timerTick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    timerTick() {
        if (this.state.status === 1) {
            if (this.state.timeRemaining > 0) {
                this.setState(state => ({
                    timeRemaining: state.timeRemaining - 1
                }))
            }
            else if (this.state.mode === 0) {
                this.setState(state => ({
                    tasks: [...state.tasks, {
                        name: "Task 01", 
                        time: this.pomodoroTime,
                        date: new Date().toLocaleDateString()
                    }],
                }));
                this.initRestMode();
            }
            else if (this.state.mode !== 0) {
                this.initWorkMode();
            }

        }
    }


    formatSecondsToTime(seconds) {
        if (seconds > 3600) {
            return "60:00"
        }

        let minutes = 0

        if (seconds >= 60) {
            minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds - minutes * 60);
        }

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    render() {
        let actionButton = (this.state.status !== 1) ?
            <span
                onClick={this.startCountdown}
                className="mx-2 p-4 rounded-md text-6xl"
            >
                <FontAwesomeIcon icon={faPlay} />
            </span> :
            <span
                onClick={this.stopCountdown}
                className="mx-2 p-4 rounded-md text-6xl"
            >
                <FontAwesomeIcon icon={faStop} />
            </span>;

        return (
            <div className="text-light-grey flex flex-col items-center p-4">
                <div className="flex flex-row my-2">
                    <span className={this.state.mode === 0 ?
                        "border px-8 py-2 mx-1 bg-light-grey rounded-md text-dark-blue font-regular text-lg"
                        : "border px-8 py-2 mx-1 rounded-md text-light-grey text-lg"}
                        onClick={this.initWorkMode}
                    >
                        Work
                    </span>
                    <span className={this.state.mode === 1 ?
                        "border px-8 py-2 mx-1 bg-light-blue rounded-md text-dark-blue font-regular text-lg" :
                        "border px-8 py-2 mx-1 rounded-md text-light-grey text-lg"}
                        onClick={this.initRestMode}
                    >
                        Rest
                    </span>
                    <span className={this.state.mode === 2 ?
                        "border px-8 py-2 mx-1 bg-light-blue rounded-md text-dark-blue font-regular text-lg" :
                        "border px-8 py-2 mx-1 rounded-md text-light-grey text-lg"}
                        onClick={this.initBigRestMode}
                    >
                        Big Rest
                    </span>
                </div>
                <div
                    className={this.state.mode === 0 ?
                        "flex flex-row justify-center align-middle border rounded-md" :
                        "flex flex-row justify-center align-middle border rounded-md text-light-blue border-color-light-blue"}
                >
                    <div className="py-4 ml-4">
                        <span
                            className={this.state.mode === 0 ?
                                "mx-2 text-9xl" :
                                "mx-2 text-9xl text-light-blue"}
                        >
                            {this.formatSecondsToTime(this.state.timeRemaining)}
                        </span>
                    </div>
                    <div className="flex flex-col justify-around">
                        {actionButton}
                    </div>
                </div>
                <div className="my-2">
                    {this.state.tasks.map(task => {
                        return (<div className="border rounded-md py-2 px-8">
                            {task.name} - {task.time} min - {task.date}
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}

export default Stopwatch;
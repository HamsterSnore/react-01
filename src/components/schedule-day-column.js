import React from "react";

class ScheduleDayColumn extends React.Component
{
    render(){
        return <div className="flex p-8">
            <div className="p-4 color-medium-blue">
                <div>
                    {this.props.dayName}
                </div>
            </div>
        </div>
    }
}

export default ScheduleDayColumn;
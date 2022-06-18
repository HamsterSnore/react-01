import ScheduleDayColumn from '../components/schedule-day-column'
function Home() {
    return (
        <div className="container color-dark-blue min-h-screen p-8 text-lg flex justify-center">
            <div className="flex p-8 columns-auto">
                <ScheduleDayColumn dayName="Monday"/>
                <ScheduleDayColumn dayName="Tuesday"/>
                <ScheduleDayColumn dayName="Wednesday"/>
                <ScheduleDayColumn dayName="Thursday"/>
                <ScheduleDayColumn dayName="Friday"/>
                <ScheduleDayColumn dayName="Saturday"/>
                <ScheduleDayColumn dayName="Sunday"/>
            </div>
        </div>
    );
}

export default Home;

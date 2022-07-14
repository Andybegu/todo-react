
import Time from "./time";
import TabContent from "./components/content";

const TimeTracker = ()=>{
    return(
        <div className="timeTracker">
            <div className="timeList">
                <Time />
            </div>

            <div className="tracker tabContainer">
                <TabContent tab="daily" className="tabContent active"/>
                <TabContent tab= "weekly" className="tabContent"/>
                <TabContent tab="monthly" className="tabContent"/>
            </div>
        </div>
    );
}

export default TimeTracker;
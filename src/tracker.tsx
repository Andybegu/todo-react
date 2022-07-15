
import Time from "./components/profile/time";
import TabContent from "./components/content";
import UserInfo from "./components/profile/userInfo"

const TimeTracker = ()=>{
    return(
        <div className="timeTracker">
            <div className="timeList">
                <UserInfo/>
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
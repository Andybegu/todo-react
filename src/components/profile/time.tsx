import React, {Component} from "react";
import Tabs from "../../tabs";
import './time.css'

class Time extends Component{
    componentDidMount(){
        Tabs();
    }
    
    changeActiveTab = (e:React.MouseEvent<HTMLElement|null>)=>{
        let tabs = document.getElementsByClassName('tab');
        for(let i=0; i<tabs.length; i++){
            tabs[i].classList.remove('active');
        }
        const target = e.target as HTMLInputElement;
        target.classList.add('active');
        Tabs();
    }
    render(){
        return(
            <div className="time">
                <ul className="tabs">
                    <li data-tab="daily" className="tab active" onClick={e=>this.changeActiveTab(e)}>daily</li>
                    <li data-tab="weekly" className="tab" onClick={e=>this.changeActiveTab(e)}>weekly</li>
                    <li data-tab="monthly" className="tab" onClick={e=>this.changeActiveTab(e)}>monthly</li>
                </ul>
            </div>
        )
    }
}

export default Time;
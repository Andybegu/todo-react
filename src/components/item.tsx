
import { FC } from 'react';
import './item.css';
export interface IData{
    title:string;
    hours:number;
    prevLog:number;
}
const Item:FC<IData> = ({title,hours,prevLog})=>{
    return(
        <div className={"trackerItem "+title}>
            <div className="trackerInfo">
                <div className="header">
                    <span className="title">{title}</span>  
                </div>
                <div className="body">
                    <span className="hours">{hours}hrs</span>
                    <span className="prevLog">last week - {prevLog}hrs</span>
                </div>
            </div>
        </div>
    )
}

export default Item;
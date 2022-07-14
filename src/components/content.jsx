import React, { useEffect, useState} from "react";
import Item from "./item";


import './Content.css';

const TabContent = (props)=>{
    const [data, setData] = useState([]);
    const getData = ()=> {
        fetch('https://wookie.codesubmit.io/time-tracking',
        {
            headers : {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    }).then((res)=>{
        return res.json();
    }).then((myJson)=>{
        setData(myJson);
    })
    };

    useEffect(() => {
        getData();
    }, [])
    return(
        <div id={props.tab} className="tabContent">
            {data.map((item, index)=>{
                if(props.tab === 'daily'){
                    return <Item title={item.title} hours={item.timeframes.daily.current} prevLog={item.timeframes.daily.previous}/>
                }else if(props.tab === "weekly"){
                    return <Item title={item.title} hours={item.timeframes.weekly.current} prevLog={item.timeframes.weekly.previous}/>
                }else if(props.tab === 'monthly'){
                    return <Item title={item.title} hours={item.timeframes.monthly.current} prevLog={item.timeframes.monthly.previous}/>
                }
                return <h1>{item.title}</h1>
            })}
            
        </div>
    );

}

export default TabContent;
import React from "react";
import userImg from '../../images/andy.jpg';

import './userInfo.css'

const UserInfo = ()=>{
    return(
        <div className="userInfo">
            <img src={userImg} alt="Jeremy Robson"/>
            <div className="infoContainer">
                <h4>Report for</h4>
                <h1>andy pop</h1>
            </div>
        </div>
    );
}

export default UserInfo;
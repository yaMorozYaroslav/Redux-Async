import React from 'react';
import {axioser} from '../Control/Control';
import './Elv2.css';

export const Elv2 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
	axioser().then(data=>setData(data[1]));
     
},[place])


return <>
       <p>Current floor {place.floor} 
        {place.state == "up"
             ?", and we're moving up to "+place.targetFloor:null}  
        {place.state == "down"
             ?", and we're miving down to "+place.targetFloor:null}
             </p>

         <div className="contain">

               {place.floor == "0"
               ?<div className="one"/>
                :<div className="second"/>}

              {place.floor == "1"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "2"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "3"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "4"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "5"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "6"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "7"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "8"
               ?<div className="one"/>
                :<div className="second"/>}

                {place.floor == "9"
               ?<div className="one"/>
                :<div className="second"/>}
                </div> 
        </>
}
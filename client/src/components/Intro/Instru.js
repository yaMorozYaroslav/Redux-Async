 import React from 'react';

 export function Instru(){
 	const [vik, setVik] = React.useState(true)
 	React.useEffect(()=>{
        
 		const timein = setTimeout(()=>{
 			setVik(false)
 		},6500)

 		return()=>clearTimeout(timein);
 	},[vik])
 	return<p>{vik
        ?'You can access all elevators  by double- and triple-click. The countdown starts from the first.'
        :null}</p>
 }
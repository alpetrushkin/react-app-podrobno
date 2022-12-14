import React from 'react';

type OnOffPropsType = {
   on: boolean
   callback: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

   const onStyle = {
      display: 'inline-block',
      border: '1px solid black',
      padding: '2px',
      backgroundColor: props.on ? 'green' : 'white',
      marginRight: '2px',
      cursor: 'pointer'
   }

   const offStyle = {
      display: 'inline-block',
      border: '1px solid black',
      padding: '2px',
      cursor: 'pointer',
      backgroundColor: props.on ? 'white' : 'red',
   }

   const indicator = {
      width: '10px',
      height: '10px',
      border: '1px solid black',
      borderRadius: '5px',
      backgroundColor: props.on ? 'green' : 'red',
      display: 'inline-block',
      marginLeft: '5px'
   }

   return (
      <>
         <div style={onStyle} onClick={() => props.callback(true)}>ON</div>
         <div style={offStyle} onClick={() => props.callback(false)}>OFF</div>
         <div style={indicator}></div>
      </>
   );
};

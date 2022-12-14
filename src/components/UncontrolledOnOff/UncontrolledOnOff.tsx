import React from 'react';

type OnOffPropsType = {
   onChange: (switchOn: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {
   const [on, setOn] = React.useState(false)

   const onStyle = {
      display: 'inline-block',
      border: '1px solid black',
      padding: '2px',
      backgroundColor: on ? 'green' : 'white',
      marginRight: '2px',
      cursor: 'pointer'
   }

   const offStyle = {
      display: 'inline-block',
      border: '1px solid black',
      padding: '2px',
      cursor: 'pointer',
      backgroundColor: on ? 'white' : 'red',
   }

   const indicator = {
      width: '10px',
      height: '10px',
      border: '1px solid black',
      borderRadius: '5px',
      backgroundColor: on ? 'green' : 'red',
      display: 'inline-block',
      marginLeft: '5px'
   }

   const onClicked = () => {
      setOn(true)
      props.onChange(true)
   }

   const offClicked = () => {
      setOn(false)
      props.onChange(false)
   }

   return (
      <>
         <div style={onStyle} onClick={onClicked}>ON</div>
         <div style={offStyle} onClick={offClicked}>OFF</div>
         <div style={indicator}></div>
      </>
   );
};

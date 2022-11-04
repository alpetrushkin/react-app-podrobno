import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
   return (
      <div className="App">

         <OnOff/>

         <UncontrolledAccordion title={'Menu'}/>
         <UncontrolledAccordion title={'User'}/>

         <UncontrolledRating/>
      </div>
   );
}

type PageTitlePropsType = {
   title: string
}
//
// const PageTitle = (props: PageTitlePropsType) => {
//    console.log('PageTitle rendering')
//   return <h1>{props.title}</h1>
// }

export default App;

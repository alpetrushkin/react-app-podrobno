import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
   const [ratingValue, setRatingValue] = React.useState<RatingValueType>(2);
   const [accordionCollapsed, setAccordionCollapsed] = React.useState<boolean>(false)
   const [switchOn, setSwitchOn] = React.useState(false)

   return (

      <div className="App">
         <PageTitle title={'PageTitle rendering'}/>
         <OnOff on={switchOn} callback={setSwitchOn}/>
         <Rating value={ratingValue} callback={setRatingValue}/>
         <Accordion title={'Menu'} collapsed={accordionCollapsed} callback={() => setAccordionCollapsed(!accordionCollapsed)}/>
         <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
      </div>
   );
}

type PageTitlePropsType = {
   title: string
}

const PageTitle = (props: PageTitlePropsType) => {
   console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}

export default App;

import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
   console.log('App rendering')
   return (
      <div className="App">
         <PageTitle title='This is App component'/>
         <PageTitle title='My friends'/>
         <Rating value={1}/>
         <Accordion title={'Menu'}/>
         <Accordion title={'Settings'}/>
         <Rating value={0}/>
         <Rating value={1}/>
         <Rating value={2}/>
         <Rating value={3}/>
         <Rating value={4}/>
         <Rating value={5}/>
      </div>
   );
}

const PageTitle = (props: any) => {
   console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}

export default App;

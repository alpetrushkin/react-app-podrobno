import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";

function App() {
   const [ratingValue, setRatingValue] = React.useState<RatingValueType>(2);

   return (
      <div className="App">
         <OnOff/>
         <Rating value={ratingValue} callback={setRatingValue}/>
         <PageTitle title={'111'}/>
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

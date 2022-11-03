import React from 'react';
import './App.css';

function App() {
   return (
      <div className="App">
         <h3>This is App component</h3>
         <Rating/>
         <Accordion/>
      </div>
   );
}

const Rating = () => {
   return (
      <>
         <Star/>
         <Star/>
         <Star/>
         <Star/>
         <Star/>
      </>
   )
}

const Accordion = () => {
   return (
      <>
         <h3>Menu</h3>
         <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      </>
   )
}

const Star = () => {
   return (
      <div>star</div>
   )
}

export default App;

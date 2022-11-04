import React from 'react';

type RatingPropsType = {
   value: number
}

export const Rating = (props: RatingPropsType) => {
   console.log('Rating rendering')

   return (
      <div>
         <Star selected={props.value > 0}/>
         <Star selected={props.value > 1}/>
         <Star selected={props.value > 2}/>
         <Star selected={props.value > 3}/>
         <Star selected={props.value > 4}/>
      </div>
   )
}

type StarPropsType = {
   selected: boolean
}

const Star = (props: StarPropsType) => {
   console.log('Star rendering')
   return (
      (props.selected ? <span style={{color: 'red'}}>star </span> : <span>star </span>)
   )
}
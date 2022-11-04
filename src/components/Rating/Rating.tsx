import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
   value: RatingValueType
   callback: (value: RatingValueType) => void
}

export const Rating = (props: RatingPropsType) => {
   console.log('UncontrolledRating rendering')

   return (
      <div>
         <Star selected={props.value > 0} onClick={() => props.callback(1)}/>
         <Star selected={props.value > 1} onClick={() => props.callback(2)}/>
         <Star selected={props.value > 2} onClick={() => props.callback(3)}/>
         <Star selected={props.value > 3} onClick={() => props.callback(4)}/>
         <Star selected={props.value > 4} onClick={() => props.callback(5)}/>
      </div>
   )
}

type StarPropsType = {
   selected: boolean
   onClick: () => void
}

const Star = (props: StarPropsType) => {
   console.log('Star rendering')
   return (
      <span onClick={() => props.onClick()} style={{cursor: 'pointer'}}>{props.selected ? <b style={{color: 'red'}}>star </b> : 'star '}</span>
      // (props.selected ? <span style={{color: 'red'}}>star </span> : <span>star </span>)
   )
}
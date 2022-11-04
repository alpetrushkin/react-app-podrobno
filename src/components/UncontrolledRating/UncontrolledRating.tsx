import React from 'react';


export const UncontrolledRating = () => {
   console.log('UncontrolledRating rendering')

   const [value, setValue] = React.useState(0 )

   return (
      <div>
         <Star selected={value > 0}/><button onClick={() => setValue(1)}>1</button>
         <Star selected={value > 1}/><button onClick={() => setValue(2)}>2</button>
         <Star selected={value > 2}/><button onClick={() => setValue(3)}>3</button>
         <Star selected={value > 3}/><button onClick={() => setValue(4)}>4</button>
         <Star selected={value > 4}/><button onClick={() => setValue(5)}>5</button>
         <button style={{marginLeft: '10px'}} onClick={() => setValue(0)}>X</button>
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
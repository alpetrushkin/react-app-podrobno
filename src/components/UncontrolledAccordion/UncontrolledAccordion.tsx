import React from "react";

type AccordionPropsType = {
   title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
   console.log('UncontrolledAccordion rendering')

   const [collapsed, setCollapsed] = React.useState(true)

   return <>
      <AccordionTitle titles={props.title}/> <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
      {collapsed && <AccordionBody/>}
   </>
}

type AccordionTitle = {
   titles: string
}

const AccordionTitle = (props: AccordionTitle) => {
   console.log('AccordionTitle rendering')
   return (
         <h3>{props.titles}</h3>
   )
}

const AccordionBody = () => {
   console.log('AccordionBody rendering')
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
}
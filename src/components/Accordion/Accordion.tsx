import React from "react";

type AccordionPropsType = {
   title: string
   collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
   console.log('Accordion rendering')
   return <>
      <AccordionTitle titles={props.title}/>
      {props.collapsed && <AccordionBody/>}
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
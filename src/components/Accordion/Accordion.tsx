import React from "react";

type AccordionPropsType = {
   title: string
   collapsed: boolean
   callback: () => void
}

export const Accordion = (props: AccordionPropsType) => {
   return <>
      <AccordionTitle titles={props.title} onClick={props.callback} />
      {!props.collapsed && <AccordionBody/>}
   </>
}

type AccordionTitle = {
   titles: string
   onClick: () => void
}

const AccordionTitle = (props: AccordionTitle) => {
   console.log('AccordionTitle rendering')
   return (
      <h3 style={{cursor: 'pointer'}} onClick={() => props.onClick()}>{props.titles}</h3>
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
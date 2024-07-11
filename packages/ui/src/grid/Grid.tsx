import {HTMLProps} from "react";

interface Props extends HTMLProps<HTMLElement> {
  col: number
}

export const Grid = ({col, ...props}: Props) => (
  <article {...props} style={{display: 'flex'}}>
    {Array.from({length: col}).map(() => (
      <>
        <section style={{padding: '10px'}}>
          {props.children}
        </section>
        <span style={{borderRight: '1px solid lightgray'}}/>
      </>
    ))}
  </article>
)

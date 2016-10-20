import * as React from 'react';

export interface Props {
  factor: number;
}

export const MultiplicationTable = (props: Props): JSX.Element =>
  <ul>
    { getRange(1, 10).map(i => 
      <MultiplicationLine key={i} multiplicand={i} {...props} />
    )}
  </ul>;

const MultiplicationLine = (props: { multiplicand: number, factor: number }): JSX.Element =>
  <li>
    {props.factor} x {props.multiplicand} = {props.factor * props.multiplicand}
  </li>;

function getRange(from: number, to: number): number[] {
  return Array.apply(null, Array(to - from + 1)).map((_, i) => i + from);
}
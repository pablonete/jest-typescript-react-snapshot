import * as React from 'react';

export interface Props {
  factor: number;
}

export const MultiplicationTable = (props: Props): JSX.Element =>
  <ul>
    { getRange(1, 10).map(i => 
      <li key={i}>{props.factor} x {i} = {props.factor*i}</li>
    )}
  </ul>;

function getRange(from: number, to: number): number[] {
  return Array.apply(null, Array(to - from + 1)).map((_, i) => i + from);
}
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MultiplicationTable } from "../MultiplicationTable";

it('MultiplicationTable for number 5', () => {
  const checkbox = renderer.create(
    <MultiplicationTable factor={5} />
  );

  expect(checkbox.toJSON()).toMatchSnapshot();
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { CheckboxWithLabel } from "../CheckboxWithLabel";

it('CheckboxWithLabel changes the text after click', () => {
  const checkbox = renderer.create(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.toJSON()).toMatchSnapshot();
});

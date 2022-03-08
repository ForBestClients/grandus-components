import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Test from '../Test';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('example test', () => {
  test('render', () => {
    const { getByTestId } = render(<Test />);

    expect(getByTestId(/example\-test/i).textContent).toBe(
      'this is test component',
    );
  });
});

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

describe('example test', () => {
  test('render', () => {
    // const { getByTestId } = render(<Test />);

    expect('hello world').toBe('hello world');
  });
});

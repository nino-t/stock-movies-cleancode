import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import useDebounce from './use-debounce';
import userEvent from '@testing-library/user-event';

const setup = (args: { initialText: string, delay: number }): void => {
  const TestComponent = () => {
    const [text, setText] = React.useState<string>(args.initialText);
    const debouncedText = useDebounce(text, args.delay);

    return (
      <React.Fragment>
        <input
          type="text"
          value={text}
          data-testid="textbox"
          onChange={(e) => setText(e.target.value)}
        />
        <p data-testid="result">{debouncedText}</p>
      </React.Fragment>
    );
  }
  
  render(<TestComponent />);
}

describe("use-debounce utils", () => {
  it('debounce string and waiting in 5 seconds', async () => {
    // Arrange
    const args = {
      initialText: '',
      delay: 500 //in milliseconds
    }
    setup(args);

    // Act
    const newString = 'hello-world';
    userEvent.type(screen.getByTestId('textbox'), newString);

    // Assert
    const target = screen.getByTestId('result');
    expect(target.textContent).toBe(args.initialText); // Not ready to call
    await waitFor(() => expect(target.textContent).toBe(newString), { timeout: args.delay }); // Already called after delay
  });
});  
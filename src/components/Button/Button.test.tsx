import { render, screen } from '@testing-library/react';
import Button from './index';
import { getByQueryId } from '../../mocks/query';
import { userEvent } from '@testing-library/user-event';

describe('Button', () => {
  it('should render', async () => {
    render(<Button />);

    const message = getByQueryId('message');
    expect(message.textContent).toEqual('');

    const button = getByQueryId('button');
    expect(button.textContent).toEqual('Click me , baby');
    await userEvent.click(button);
    expect(message.textContent).toEqual('oh yea baby! click me again!');

    await userEvent.click(button);
    expect(message.textContent).toEqual('You click me so good');

    await userEvent.click(button);
    expect(message.textContent).toEqual(
      'Woah your getting a little too spicy with me',
    );

    await userEvent.click(button);
    expect(message.textContent).toEqual('we are done');
    expect(button.textContent).toEqual('🔥🚒🧨');
  });
});

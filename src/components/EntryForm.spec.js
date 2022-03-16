import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EntryForm from './EntryForm.js';

describe('EntryForm', () => {
  it('renders a label and input with placeholder plus a button', () => {
    const callback = jest.fn();
    render(<EntryForm onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Create new entry' });
    expect(form).toBeInTheDocument();

    const input = screen.getByLabelText('Add lean coffee note');
    userEvent.type(input, 'Lorem ipsum dolor sit.{enter}');

    expect(form).toContainElement(input);

    expect(callback).toHaveBeenCalledWith('Lorem ipsum dolor sit.');
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EntryForm from './EntryForm.js';

describe('EntryForm', () => {
  // it('renders a label and input with placeholder plus a button', () => {
  //   render(<EntryForm labelText="add note" placeholder="lean coffee note" />);

  //   const input = screen.getByLabelText('add note');
  //   expect(input).toHaveAttribute('placeholder', 'lean coffee note');

  //   const submitButton = screen.getByRole('button', { name: '+' });
  //   expect(submitButton).toBeInTheDocument();
  // });

  it('renders an input and buttonfunction', () => {
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

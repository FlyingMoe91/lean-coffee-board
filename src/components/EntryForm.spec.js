import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm.js';

describe('EntryForm', () => {
  it('renders a label and input with placeholder plus a button', () => {
    render(<EntryForm labelText="add note" placeholder="lean coffee note" />);

    const input = screen.getByLabelText('add note');
    expect(input).toHaveAttribute('placeholder', 'lean coffee note');

    const submitButton = screen.getByRole('button', { name: '+' });
    expect(submitButton).toBeInTheDocument();
  });
});

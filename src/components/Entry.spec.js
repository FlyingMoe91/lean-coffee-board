import { render, screen } from '@testing-library/react';
import Entry from './Entry.js';

describe('Entry', () => {
  it('shows a text, the author and an input to mark', () => {
    render(<Entry text="Test" author="Jane" />);

    const text = screen.getByText('Test', { exact: false });
    expect(text).toBeInTheDocument();

    const author = screen.getByText('Jane', { exact: false });
    expect(author).toBeInTheDocument();

    const input = screen.getByLabelText('mark as read');
    expect(input).toBeInTheDocument();
  });
});

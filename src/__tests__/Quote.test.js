import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';
import '@testing-library/jest-dom/extend-expect';

describe('Quote', () => {
  test('renders quote and author', async () => {
    const mockData = [
      {
        author: 'John Doe',
        quote: 'Lorem ipsum dolor sit amet',
      },
    ];
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));

    render(<Quote />);
    const quoteText = await screen.findByText(/Lorem ipsum dolor sit amet/i);
    const quoteAuthor = await screen.findByText(/John Doe/i);

    expect(quoteText).toBeInTheDocument();
    expect(quoteAuthor).toBeInTheDocument();

    global.fetch.mockRestore();
  });

  test('renders loading spinner while fetching data', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => new Promise(() => {}));

    render(<Quote />);
    const loadingSpinner = await screen.findByRole('alert');

    expect(loadingSpinner).toBeInTheDocument();

    global.fetch.mockRestore();
  });

  test('renders error message when data fetching fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('Fetch failed')));

    render(<Quote />);
    const errorMessage = await screen.findByText(/Something went wrong!/i);

    expect(errorMessage).toBeInTheDocument();

    global.fetch.mockRestore();
  });

  test('renders the quote page', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  })
});

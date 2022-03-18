import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';



test('renders a search bar with empty value on the page', () => {
  render(<App />);
  const searchBar = screen.getByTestId("searchBar")
  expect(searchBar.value).toBe('');
});


test('change input value when user type search term', () => {
  render(<App />);
  const searchBar = screen.getByTestId("searchBar");
  fireEvent.change(searchBar, { target: { value: "testing" }})
  expect(searchBar.value).toBe('testing');
});


test('show spinner when loading', async () => {
  render(<App />);
  const searchBar = screen.getByTestId("searchBar");
  fireEvent.change(searchBar, { target: { value: "testing" }})
  const loader = await screen.findByTestId("loader");
  expect(loader).toBeTruthy();
});


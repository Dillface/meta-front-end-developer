import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // const bookingButton = screen.getByRole('button', { name: "Reserve"});
  // expect(bookingButton).toBeInTheDocument();

  // fireEvent.click(bookingButton);

  // const firstName = screen.getByText("First Name");
  // expect(firstName).toBeInTheDocument();
});

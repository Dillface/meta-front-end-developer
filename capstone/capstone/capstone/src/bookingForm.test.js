// File: BookingForm.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

// Mock external hooks and modules
const mockSubmit = jest.fn();
const mockClearResponse = jest.fn();
jest.mock("./hooks/useSubmit", () => () => ({
  isLoading: true,
  response: null,
  submit: mockSubmit,
  clearResponse: mockClearResponse,
}));
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  Outlet: () => <div>Outlet</div>,
  useMatch: () => null,
}));


const dummySetAvailableTimes = jest.fn();
const availableTimes = ["17:00", "18:00"];

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders form and its fields", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={dummySetAvailableTimes}
      />
    );

    // Check for heading
    expect(screen.getByText(/Book your Table/i)).toBeInTheDocument();

    // Check for input fields
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of People/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();

    expect(screen.queryByLabelText(/First name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Last name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Date is required/i)).not.toBeInTheDocument();

    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument
  });

  test("calls submit on valid form submission", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={dummySetAvailableTimes}
      />
    );

    // Fill in the form with valid inputs
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Number of People/i), {
      target: { value: "3" },
    });
    const today = new Date().toISOString().split("T")[0];
    fireEvent.change(screen.getByLabelText(/^Date/i), {
      target: { value: today },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: availableTimes[0] },
    });
    
    // Submit the form
    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(mockSubmit).toHaveBeenCalledWith("https://example.com/", {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        noOfPeople: 3,
        date: today,
        time: availableTimes[0],
        comment: "",
      });
    });
  });
});
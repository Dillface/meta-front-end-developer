import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, Outlet, useMatch } from "react-router-dom";
import * as Yup from "yup";
import { fetchAPI } from "./Api";
import useSubmit from "../hooks/useSubmit";

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const { isLoading, response, submit, clearResponse } = useSubmit();
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const bookingConfirmedMatch = useMatch("/reserve/booking-confirmed");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      noOfPeople: 1,
      date: "",
      time: "",
      comment: ""
    },
    onSubmit: (values) => {
      submit("https://example.com/", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      comment: Yup.string().notRequired()
    }),
  });

  useEffect(() => {
    if (response) {
      formik.resetForm();
      clearResponse();
      navigate("booking-confirmed");
    }
  }, [response, clearResponse, navigate, formik]);

  useEffect(() => {
    const times = fetchAPI(formik.values.date);
    setAvailableTimes(times);
    if (times && times.length > 0) {
      formik.setFieldValue("time", times[0]);
    }
  }, [formik.values.date, setAvailableTimes]);

  return (
    <div id="contact-me" style={{ backgroundColor: "#495e57", padding: "7rem", color: "#fff" }}>
      {!bookingConfirmedMatch && (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem", textAlign: "left" }}>
          <h1 id="contactme-section">Book your Table</h1>
          <div style={{ padding: "1.5rem", borderRadius: "0.5rem", backgroundColor: "#fff", color: "#000" }}>
            <form onSubmit={formik.handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="firstName">
                  First Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  style={{ width: "100%" }}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <small style={{ color: "red" }}>{formik.errors.firstName}</small>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="lastName">
                  Last Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  style={{ width: "100%" }}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <small style={{ color: "red" }}>{formik.errors.lastName}</small>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">
                  Email Address<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  style={{ width: "100%" }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <small style={{ color: "red" }}>{formik.errors.email}</small>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="noOfPeople">
                  Number of People<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  id="noOfPeople"
                  name="noOfPeople"
                  type="number"
                  min="1"
                  max="10"
                  style={{ width: "100%" }}
                  value={formik.values.noOfPeople}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.noOfPeople && formik.errors.noOfPeople && (
                  <small style={{ color: "red" }}>{formik.errors.noOfPeople}</small>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="date">
                  Date<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={today}
                  style={{ width: "100%" }}
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.date && formik.errors.date && (
                  <small style={{ color: "red" }}>{formik.errors.date}</small>
                )}
              </div>
              {!formik.errors.date && (
                              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="time">
                  Time<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  id="time"
                  name="time"
                  style={{ width: "100%" }}
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {availableTimes.map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              )}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="comment">Special requests</label>
                <textarea
                  id="comment"
                  name="comment"
                  style={{ width: "100%", height: "125px" }}
                  placeholder="e.g. Anniversary"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                /> 
                {formik.touched.comment && formik.errors.comment && (
                  <small style={{ color: "red" }}>{formik.errors.comment}</small>
                )}
              </div>
              <button 
                type="submit" 
                style={{ width: "100%"}}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default BookingForm;
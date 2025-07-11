
import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import { useNavigate, Outlet, useMatch } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { fetchAPI } from "./Api";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";


const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const {isLoading, response, submit, clearResponse} = useSubmit();
  const { onOpen } = useAlertContext();
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const bookingConfirmedMatch = useMatch("/Reserve/booking-confirmed");


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
      submit('https://example.com/', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      date: Yup.date().required('Date is required'),
      time: Yup.string().required('Type is required'),
      comment: Yup.string().notRequired()
    }),
  });

  useEffect(() => {
      if(response) {
        onOpen (response.type, response.message);
        formik.resetForm();
        clearResponse();
        navigate("booking-confirmed");
      }
      
    }, [response])

    useEffect(() => {
      setAvailableTimes(fetchAPI(formik.values.date));
    }, [formik.values.date]);
  

  return (
    
    <FullScreenSection
      id="contact-me"
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      {!bookingConfirmedMatch && <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Book your Table
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">First Name<span style={{ color: 'red' }}>*</span></FormLabel>
                <Input
                  width="100%"
                  id="firstName"
                  name="firstName"
                  aria-label="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.touched.firstName && formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName}>
                <FormLabel htmlFor="lastName">Last Name<span style={{ color: 'red' }}>*</span></FormLabel>
                <Input
                  width="100%"
                  id="lastName"
                  name="lastName"
                  aria-label="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps("lastName")}
                />
                <FormErrorMessage>{formik.touched.lastName && formik.errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address<span style={{ color: 'red' }}>*</span></FormLabel>
                <Input
                  width="100%"
                  id="email"
                  name="email"
                  type="email"
                  aria-label="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.touched.email && formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.noOfPeople && formik.errors.noOfPeople}>
                <FormLabel htmlFor="noOfPeople">Number of People<span style={{ color: 'red' }}>*</span></FormLabel>
                <Input
                  width="100%"
                  id="noOfPeople"
                  name="noOfPeople"
                  aria-label="noOfPeople"
                  type="number"
                  min="1"
                  max="10"
                  value={formik.values.noOfPeople}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps("noOfPeople")}
                />
                <FormErrorMessage>{formik.touched.noOfPeople && formik.errors.noOfPeople}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="date">Date<span style={{ color: 'red' }}>*</span></FormLabel>
                <Input
                  width="100%"
                  id="date"
                  name="date"
                  type="date"
                  aria-label="date"
                  min={today}
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.touched.date && formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="time">Time<span style={{ color: 'red' }}>*</span></FormLabel>
                <Select 
                  width="100%"
                  id="time" 
                  name="time" 
                  aria-label="time"
                  {...formik.getFieldProps("time")}>
                 {availableTimes.map(time => {
                    return <option key={time} value={time}>{time}</option>
                 })}
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Special requests</FormLabel>
                <Textarea
                  kwidth="100%"
                  id="comment"
                  name="comment"
                  height={125}
                  value={formik.values.comment}
                  placeholder="e.g. Anniversary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-label="comment"
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.touched.comment && formik.errors.comment}</FormErrorMessage>
                </FormControl>
              <Button type="submit" colorScheme="blue" width="full" aria-label="submit" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      }
      <Outlet />
    </FullScreenSection>
  );
};

export default BookingForm;

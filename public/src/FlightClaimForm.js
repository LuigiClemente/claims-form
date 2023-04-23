import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const validationSchema = Yup.object().shape({
  // ... (keep the existing validation schema)
});

const initialValues = {
  // ... (keep the existing initial values)
};

const onSubmit = (values) => {
  // ... (keep the existing onSubmit function)
};

const FlightClaimForm = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('EU Flight Delay and Cancellation Claim Form')}</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values }) => (
          <Form>
            <label htmlFor="firstName">{t('First Name')}:</label>
            <Field name="firstName" />
            <ErrorMessage name="firstName" />
            <br />

            <label htmlFor="lastName">{t('Last Name')}:</label>
            <Field name="lastName" />
            <ErrorMessage name="lastName" />
            <br />

            <label htmlFor="address">{t('Address')}:</label>
            <Field name="address" />
            <ErrorMessage name="address" />
            <br />

            <label htmlFor="email">{t('Email')}:</label>
            <Field name="email" />
            <ErrorMessage name="email" />
            <br />

            <label htmlFor="phoneNumber">{t('Phone Number')}:</label>
            <Field name="phoneNumber" />
            <ErrorMessage name="phoneNumber" />
            <br />

            <label htmlFor="airline">{t('Airline')}:</label>
            <Field name="airline" />
            <ErrorMessage name="airline" />
            <br />

            <label htmlFor="flightNumber">{t('Flight Number')}:</label>
            <Field name="flightNumber" />
            <ErrorMessage name="flightNumber" />
            <br />

            <label htmlFor="departureAirport">{t('Departure Airport')}:</label>
            <Field name="departureAirport" />
            <ErrorMessage name="departureAirport" />
            <br />

            <label htmlFor="arrivalAirport">{t('Arrival Airport')}:</label>
            <Field name="arrivalAirport" />
            <ErrorMessage name="arrivalAirport" />
            <br />

            <label htmlFor="scheduledDeparture">{t('Scheduled Departure')}:</label>
            <Field name="scheduledDeparture" />
            <ErrorMessage name="scheduledDeparture" />
            <br />

            <label htmlFor="actualDeparture">{t('Actual Departure')}:</label>
            <Field name="actualDeparture" />
            <ErrorMessage name="actualDeparture" />
            <br />

            <label htmlFor="incidentType">{t('Incident Type')}:</label>
            <Field as="select" name="incidentType">
              <option value="">{t('Select incident type')}</option>
              <option value="delayed">{t('Delayed')}</option>
              <option value="cancelled">{t('Cancelled')}</option>
            </Field>
            <ErrorMessage name="incidentType" />
            <br />

            <label htmlFor="delayLength">{t('Delay Length')}:</label>
            <Field name="delayLength" />
            <ErrorMessage name="delayLength" />
            <br />

            <label htmlFor="reason">{t('Reason for Delay or Cancellation')}:</label>
            <Field name="reason" />
            <ErrorMessage name="reason" />
            <br />

            <label htmlFor="assistance">{t('Assistance Provided')}:</label>
            <Field as="select" name="assistance">
              <option value="">{t('Select assistance type')}</option>
              <option value="food">{t('Food')}</option>
              <option value="accommodation">{t('Accommodation')}</option>
              <option value="transport">{t('Transport')}</option>
              <option value="none">{t('None')}</option>
            </Field>
            <ErrorMessage name="assistance" />
            <br />

            <label htmlFor="assistanceDetails">{t('Assistance Details (if any)')}:</label>
            <Field name="assistanceDetails" />
            <ErrorMessage name="assistanceDetails" />
            <br />

            <button type="submit">{t('Submit')}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FlightClaimForm;


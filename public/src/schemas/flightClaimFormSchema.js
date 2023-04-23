import * as Yup from "yup";

export const PersonalDetailsvalidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
});

export const AirlineDetailsvalidationSchema = Yup.object().shape({
//  airline: Yup.string().required("Required"),
 // flightNumber: Yup.string().required("Required"),
  departureAirport: Yup.string().required("Required"),
  arrivalAirport: Yup.string().required("Required"),
 // scheduledDeparture: Yup.string().required("Required"),
//  actualDeparture: Yup.string().required("Required"),
});

export const IncidentDetailsvalidationSchema = Yup.object().shape({
    incidentType: Yup.string().required("Required"),
    delayLength: Yup.string().required("Required"),
});

export const AssistanceDetailsvalidationSchema = Yup.object().shape({
    assistance: Yup.string().required("Required"),
});

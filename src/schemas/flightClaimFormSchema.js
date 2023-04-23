import * as Yup from "yup";

export const PersonalDetailsvalidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
});

export const AirlineDetailsvalidationSchema = Yup.object().shape({
//  airline: Yup.string().required("Required"),
 // flightNumber: Yup.string().required("Required"),
  departingFrom: Yup.string().required("Required"),
  finalDestination: Yup.string().required("Required"),
 // scheduledDeparture: Yup.string().required("Required"),
//  actualDeparture: Yup.string().required("Required"),
});

export const IncidentDetailsvalidationSchema = Yup.object().shape({
    flightDisruption: Yup.string().required("Required"),
    delayLength: Yup.string().required("Required"),
});

export const AssistanceDetailsvalidationSchema = Yup.object().shape({
    assistanceType: Yup.string().required("Required"),
});

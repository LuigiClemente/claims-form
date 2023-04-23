import * as React from "react";
import { StepLabel, Box, Stepper, Step, Button } from "@mui/material";

import { FormikWizard } from "formik-wizard-form";
import PersonalDetailsForm from "../../components/formikForms/personalDetailsForm";
import AirlineDetailsForm from "../../components/formikForms/airlineDetailsForm";
import AssistanceDetailsForm from "../../components/formikForms/assistanceDetailsForm";
import {
  AirlineDetailsvalidationSchema,
  AssistanceDetailsvalidationSchema,
  IncidentDetailsvalidationSchema,
  PersonalDetailsvalidationSchema,
} from "../../schemas/flightClaimFormSchema";
import { useTranslation } from "react-i18next";
import Logo from "../../images/logo text.png";
import Line1 from "../../images/line1.png";
import Line2 from "../../images/line2.png";
import ScheduleDateForm from "../../components/formikForms/scheduleDateForm";
import AirlineCheckForm from "../../components/formikForms/airlineCheckForm";
import IncidentCheckForm from "../../components/formikForms/incidentCheckForm";
import AddressForm from "../../components/formikForms/addressForm";
import ReferenceForm from "../../components/formikForms/referenceForm";
import ClaimForm from "../../components/formikForms/claimForm";
import { createTheme } from "@mui/material/styles";
import LanguageModal from "../../components/modal/languageModal";
import LanguageIcon from "@mui/icons-material/Language";

export default function FlightClaimForm() {
  const [finished, setFinished] = React.useState(false);
  const [modalOpened, setModalOpened] = React.useState(false);
  const { t } = useTranslation();

  const actionBtn = (dataItem) => {
    setModalOpened(true);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
    referenceNumber: "",

    departureDate: "",

    airline: "",
    flightNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    scheduledDeparture: "",
    actualDeparture: "",

    incidentType: "",
    delayLength: "",
    reason: "",

    assistance: "",
    assistanceDetails: "",
  };

  const onSubmit = (values) => {
    //call api to send data
    console.log(values);
    alert("Success!");
  };

  const theme = createTheme({
    // your theme configuration options
  });

  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
          height: 100,
          backgroundColor: "black",
          borderColor: "primary.main",
        }}
      >
        {" "}
        <img src={Logo} alt="Logo" />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "90%",
            transform: "translate(-50%, -50%)",
            [theme.breakpoints.down("sm")]: {
              top: "90%",
            },
          }}
        >
          <Button variant="outlined" onClick={actionBtn}>
            <LanguageIcon />
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <img
              src={Line1}
              alt="Background"
              style={{
                position: "absolute",
                transform: "translate(-50%, 100%)",
                top: "10%",
                left: "50%",
                fontFamily: "Roboto, sans-serif",
              }}
            />
          </Box>
          <Box
            gridColumn="span 12"
            sx={{
              textAlign: "center",
              marginTop: "5rem",
              marginBottom: "4rem",
            }}
          >
            <h1
              style={{
                color: "black",
                fontSize: "2.2rem",
              }}
            >
              {t("formTitle")}
            </h1>
            <br />
          </Box>
          <Box gridColumn="span 12">
            <img
              src={Line2}
              alt="Background"
              style={{
                position: "absolute",
                transform: "translate(-50%, 500%)",
                top: "20%",
                left: "50%",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/*  <div style={{ position: "relative" }}>
  <Box sx={{ textAlign: "center" }}>
    <img
      src={Line1}
      alt="Background"
      style={{
        position: "absolute",
        transform: "translate(-50%, 150%)",
        top: "100%",
        left: "50%",
        fontFamily: "Roboto, sans-serif",
      }}
    />
    <h1
      style={{
        color: "black",
        fontSize: "2.2rem",
        maxWidth: "90%",
        margin: "0 auto",
      }}
    >
      {t("EU Flight Delay and Cancellation Claim Form")}
    </h1>
    <img
      src={Line2}
      alt="Background"
      style={{
        position: "absolute",
        transform: "translate(-50%, 600%)",
        top: "100%",
        left: "50%",
      }}
    />
  </Box>
  <style>
    {`
      
      @media only screen and (max-width: 600px) {
        img[src$="Line1"] {
          transform: translate(-50%, 50%);
          max-width: 80%;
        }
        img[src$="Line2"] {
          transform: translate(-50%, 200%);
          max-width: 60%;
        }
        h1 {
          font-size: 1.5rem;
        }
      }

     
      @media only screen and (min-width: 601px) and (max-width: 960px) {
        img[src$="Line1"] {
          transform: translate(-50%, 100%);
          max-width: 80%;
        }
        img[src$="Line2"] {
          transform: translate(-50%, 300%);
          max-width: 60%;
        }
        h1 {
          font-size: 1.8rem;
        }
      }
    `}
  </style>
</div> */}

      <div style={{ marginTop: "100px" }}>
        <FormikWizard
          initialValues={initialValues}
          onSubmit={(values) => {
            onSubmit(values);
            setFinished(true);
          }}
          validateOnNext
          activeStepIndex={0}
          steps={[
            {
              component: AirlineDetailsForm,
              validationSchema: AirlineDetailsvalidationSchema,
            },
            {
              component: ScheduleDateForm,
            },
            {
              component: AirlineCheckForm,
            },
            {
              component: IncidentCheckForm,
              validationSchema: IncidentDetailsvalidationSchema,
            },
            {
              component: PersonalDetailsForm,
              validationSchema: PersonalDetailsvalidationSchema,
            },
            {
              component: ReferenceForm,
            },
            {
              component: AddressForm,
            },
            {
              component: AssistanceDetailsForm,
              validationSchema: AssistanceDetailsvalidationSchema,
            },
            {
              component: ClaimForm,
            },
          ]}
        >
          {({
            currentStepIndex,
            renderComponent,
            handlePrev,
            handleNext,
            isNextDisabled,
            isPrevDisabled,
          }) => {
            return (
              <>
                <Box sx={{ width: "100%" }}>
                  <Stepper
                    activeStep={
                      currentStepIndex <= 5 ? 0 : currentStepIndex <= 7 ? 1 : 2
                    }
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      justifyContent: { xs: "center", sm: "flex-start" },
                      py: { xs: 2, sm: 0 },
                      px: { xs: 0, sm: 2 },
                      mb: { xs: 2, sm: 0 },
                    }}
                  >
                    <Step
                      completed={currentStepIndex > 5}
                      sx={{ mb: { xs: 1, sm: 0 } }}
                    >
                      <StepLabel>{t("Eligibility Check")}</StepLabel>
                    </Step>
                    <Step
                      completed={currentStepIndex > 7}
                      sx={{ mb: { xs: 1, sm: 0 } }}
                    >
                      <StepLabel>{t("Additional Information")}</StepLabel>
                    </Step>
                    <Step completed={finished} sx={{ mb: { xs: 1, sm: 0 } }}>
                      <StepLabel>{t("Finish")}</StepLabel>
                    </Step>
                  </Stepper>
                </Box>
                <Box my="2rem">{renderComponent()}</Box>
                <Box display="flex" justifyContent="space-between">
                  {currentStepIndex === 0 ? "" : (
                    <Button
                      variant="contained"
                      disabled={isPrevDisabled}
                      type="primary"
                      onClick={handlePrev}
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    disabled={isNextDisabled}
                    type="primary"
                    onClick={handleNext}
                  >
                    {currentStepIndex === 8 ? "Submit" : "Next"}
                  </Button>
                </Box>
              </>
            );
          }}
        </FormikWizard>

        <LanguageModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </div>
    </div>
  );
}

import * as React from "react";
import { StepLabel, Box, Stepper, Step, Button } from "@mui/material";
import Footer from '../../components/layout/footer/Footer';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Loader from "../../components/loader";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from 'react-router-dom';
export default function FlightClaimForm() {

  const link = useParams().id;

  const { request } = useHttp();
  const [finished, setFinished] = React.useState(false);
  const [modalOpened, setModalOpened] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const actionBtn = (dataItem) => {
    setModalOpened(true);
  };


  const [formInfo, setFormInfo] = React.useState();
  const [hasLoaded, setHasLoaded] = React.useState(false);

  const initialValues = {
    // firstName: "",
    // lastName: "",
    fullName: [],
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

  function handleClick() {
    navigate('/claimform');
  }



  const onSubmit = async (values) => {
    try {
      console.log(values);
      await request(`/api/form/update`, "PUT", ...values)
      alert("Success!");
    }
    catch (e) { }

  };

  const theme = createTheme({
    // your theme configuration options
  });


  const fetchClothes = React.useCallback(async () => {
    try {
      await request(`/api/form/find?link=${link}`, "GET").then((res) => {
        setFormInfo(res.data);
        console.log(res.data);
        setHasLoaded(true);
      });
    } catch (e) { }
  }, [request, link]);

  React.useEffect(() => {
    fetchClothes();
  }, [fetchClothes]);


  return hasLoaded ? (

    <>
      <div className="wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* <div className="col-lg-12"> */}
        <div className="content" style={{flex:1}}>
          <Box
            className="d-flex align-items-center no-gutter"
            sx={{
              // display: "flex",
              width: "100%",
              height: 100,
              backgroundColor: "black",
              borderColor: "primary.main",

            }}
          >
            {" "}
            <Box className="col" >
              <img src={Logo} alt="Logo" className="img-fluid" />
              {/* 
            <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "90%",
            transform: "translate(-50%, -50%)",
                  [theme.breakpoints.down("sm")]: {
                    position: "absolute",
              top: "90%",
            },
          }}
        >
          <Button variant="outlined" onClick={actionBtn}>
            <LanguageIcon />
          </Button>
        </Box> */}
            </Box>
            <Box className="d-flex justify-content-end align-items-center" style={{ paddingRight: "20px" }}
            >
              <Button variant="outlined" onClick={actionBtn}>
                <LanguageIcon />
              </Button>
            </Box>

          </Box>
          {/* </div> */}
          <div className="d-flex justify-content-center" style={{ paddingTop: "50px" }}>
            <div className="col-8 d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-center">
                  <img
                    src={Line1}
                    alt="Background" />

                </div>
                <Box className="d-flex justify-content-center text-center text" style={{ paddingTop: "10px" }} sx={{
                  [theme.breakpoints.up("md")]: {
                    fontSize: 4.2
                  }, [theme.breakpoints.down("md")]: {
                    fontSize: 2.2
                  },
                }}>


                  <Box
                    style={{
                      color: "black",
                      fontSize: "4.2rem",
                      fontFamily: "Playfair Display",
                      lineHeight: "75px"

                    }}
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        fontSize: "2.2rem!important",
                        lineHeight: "50px!important"
                      },
                    }}
                  >
                    {t("formTitle")}
                  </Box>

                  <br />
                </Box>
                <div className="d-flex justify-content-center" style={{ paddingTop: "10px" }}>
                  <img
                    src={Line2}
                    alt="Background" />
                </div>
              </div>
            </div>
          </div>
          

          <div style={{ marginTop: "100px", }}>


            <FormikWizard
              onSubmit={async (values) => {
                try {
                  await fetch(`/api/form/update`, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                  setFinished(true);
                  alert("Success!");
                  handleClick();
                } catch (e) {
                  console.error(e);
                }
              }}
              initialValues={formInfo}
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
                currentStepIndex, renderComponent, handlePrev, handleNext, isNextDisabled, isPrevDisabled,
              }) => {
                return (
                  <>
                    <Box className="d-flex justify-content-center" sx={{
                      mb: {
                        xs: 1, sm: 0, [theme.breakpoints.down("md")]: {
                          display: "none!important"
                        },
                      }
                    }}>
                      <div className="col-lg-8">
                        <Stepper
                          activeStep={currentStepIndex <= 5 ? 0 : currentStepIndex <= 7 ? 1 : 2}
                        >
                          <Step
                            completed={currentStepIndex > 5}
                            sx={{
                              mb: {
                                xs: 1, sm: 0, [theme.breakpoints.down("md")]: {
                                  display: "none"
                                },
                              }
                            }}
                          >
                            <StepLabel>{t("Eligibility Check")}</StepLabel>
                          </Step>
                          <Step
                            completed={currentStepIndex > 7}
                            sx={{
                              mb: {
                                xs: 1, sm: 0, [theme.breakpoints.down("md")]: {
                                  display: "none"
                                },
                              }
                            }}
                          >
                            <StepLabel>{t("Additional Information")}</StepLabel>
                          </Step>
                          <Step completed={finished} sx={{
                            mb: {
                              xs: 1, sm: 0, [theme.breakpoints.down("md")]: {
                                display: "none"
                              },
                            }
                          }}>
                            <StepLabel>{t("Finish")}</StepLabel>
                          </Step>
                        </Stepper>
                      </div>
                    </Box>
                    <Box className="d-flex justify-content-center" sx={{

                      mb: {
                        xs: 1, sm: 0, [theme.breakpoints.down("md")]: {
                          display: "none!important"
                        },
                      }

                    }}>

                      <div className="col-lg-8 col-md-8" >{renderComponent()}

                      </div>
                    </Box>

                    <Box className="" sx={{ paddingBottom: "25px",
                      mb: {
                        xs: 1, sm: 0, [theme.breakpoints.up("md")]: {
                          display: "none!important"
                        },
                      }
                    }}>


                      <div >{renderComponent()}
                        <Box className="col" sx={{
                          display: "none", [theme.breakpoints.down("md")]: {
                            display: "block",
                            justifyContent: "center",
                            background: "#1976d2",
                            borderRadius: "6px",
                            color: "white",
                            alignItems: "center",
                            maxHeight: "45px",
                            mt: 2,

                          },

                        }}>

                          {" "}
                          <div
                            className="d-flex justify-content-center"
                            disabled={isNextDisabled}

                            onClick={handleNext}
                            style={{ paddingTop: "10px"}}

                          >
                            {currentStepIndex === 8 ? t("Submit") : t("Continue")}
                          </div>




                          <Box className="col" sx={{
                            display: "none", [theme.breakpoints.down("md")]: {
                              display: "flex",
                              justifyContent: "center",
                              // background: "#1976d2",
                              borderRadius: "6px",
                              color: "#1976d2",
                              alignItems: "center",
                              maxHeight: "45px",
                              mt: 7,
                              pb: 3,

                            },

                          }}>
                            {" "}
                            {currentStepIndex === 0 ? "" : (
                              <div
                              

                                disabled={isPrevDisabled}

                                onClick={handlePrev}
                              >
                                Back
                              </div>
                            )}
                          </Box>
                        </Box>
                      </div>
                    </Box>




                    <Box className="d-flex justify-content-center" sx={{

                      mb: {
                        xs: 1, sm: 0, [theme.breakpoints.down("md")]: {
                          display: "none!important",

                        },

                      }

                    }} style={{ paddingTop: "15px", paddingBottom: "25px" }}>
                      <div className=" d-flex col-8">
                        <Box className="col-6" style={{ paddingLeft: "15px" }} >
                          {currentStepIndex === 0 ? "" : (
                            <Button
                              variant="contained"
                              disabled={isPrevDisabled}
                              type="primary"
                              onClick={handlePrev}
                            >
                              {t("Previous")}
                            </Button>
                          )}
                        </Box>
                        <Box className="col-6 d-flex justify-content-end" style={{ paddingRight: "15px" }} >
                          <Button
                            variant="contained"
                            disabled={isNextDisabled}
                            type="primary"
                            onClick={handleNext}
                          >
                            {currentStepIndex === 8 ? t("Submit") : t("Next")}
                          </Button>
                        </Box>
                      </div>
                    </Box>

                  </>
                );
              }}
            </FormikWizard>

            <LanguageModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened} />
          </div>
        </div>

      </div>
      <Footer/>
    </>

  ) : (
    <Loader />
  );
}
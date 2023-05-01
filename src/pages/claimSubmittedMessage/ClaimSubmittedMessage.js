import * as React from "react";
import { StepLabel, Box, Stepper, Step, Button, TextField, Grid, Typography } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
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
import Footer from '../../components/layout/footer/Footer';
import { createTheme } from "@mui/material/styles";
import LanguageModal from "../../components/modal/languageModal";
import LanguageIcon from "@mui/icons-material/Language";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Loader from "../../components/loader";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function ClaimSubmittedMessage() {

  const link = useParams().id;


  const [modalOpened, setModalOpened] = React.useState(false);
  const { t } = useTranslation();

  const actionBtn = (dataItem) => {
    setModalOpened(true);
  };


  const [formInfo, setFormInfo] = React.useState();


  const theme = createTheme({
    // your theme configuration options
  });




  return (

    <>
      <div className="wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* <div className="col-lg-12"> */}
        <div className="content" style={{ flex: 1 }}>
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
            </Box>
            <Box className="d-flex justify-content-end align-items-center" style={{ paddingRight: "20px" }}>
              <Button variant="outlined" onClick={actionBtn}>
                <LanguageIcon />
              </Button>
            </Box>
          </Box>

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
          <div style={{ marginTop: "100px", marginBottom: "100px", marginLeft: "auto", marginRight: "auto", width: "80%" }}>


            <FormikWizard
    
              initialValues={formInfo}
              validateOnNext
              activeStepIndex={0}
              steps={[
                {
                  component: AirlineDetailsForm,
                },

              ]}
            >
              {({
                handlePrev, handleNext,
              }) => {
                return (
                  <>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Grid>
                        <Box
                          sx={{
                            width: "100%",
                            backgroundColor: "#f3f6f9",
                            borderColor: "primary.main",
                            borderRadius: 2,
                            mt: 6,
                            pr: 5,
                            pl: 5,
                            pt: 6,
                            [theme.breakpoints.up("md")]: {
                            },
                          }}
                        >
                          <Typography mb={2}>{t("Thank you for submitting your claim to Emporium Concierge. We have received your information and it has been passed on to our legal team for review.")}</Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {" "}
                              <Typography mb={2}>
                                {t("We will contact you within 2 business days to provide an update on the status of your claim. In the meantime, please do not hesitate to contact us if you have any questions.")}
                              </Typography>
                              <Typography mb={2}>{t("Thank you for your patience and understanding.")}</Typography>
                              <Typography mb={2}>{t("Sincerely,")}</Typography>
                              <Typography mb={2}>{t("The Emporium Concierge Travel Claims Team")}</Typography>
                            </Grid>
                          </Grid>
                        </Box>


                      </Grid>
                    </LocalizationProvider>


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


  )
}
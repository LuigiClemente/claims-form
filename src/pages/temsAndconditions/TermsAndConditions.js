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
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import LanguageModal from "../../components/modal/languageModal";
import LanguageIcon from "@mui/icons-material/Language";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from '../../components/layout/footer/Footer';
import Loader from "../../components/loader";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function TermsCond() {
  const navigate = useNavigate();

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
                          <Typography sx={{fontSize: '28px', paddingBottom: '10px', fontWeight: '600'}} mb={2}>{t("Emporium Concierge Terms and Conditions")}</Typography>
                          <Typography  mb={2}>{t("Welcome to Emporium Concierge, the Justice as a Service provider. These Terms and Conditions (the 'Terms') govern the delivery of our services to you and constitute a binding agreement between you and Emporium Concierge, a trading name of Optimus Consortium Limited ('Emporium Concierge,' 'we,' 'us,' or 'our').")}</Typography>
                          <Typography sx={{fontSize: '21px', paddingBottom: '10px',paddingTop: '12px', fontWeight: '600'}} mb={2}>{t("1. Definitions")}</Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {" "}
                              <Typography mb={2}>
                                {t("In these Terms, certain terms have specific meanings, including:")}
                              </Typography>
                              <ul>
                              <li><Typography mb={2}>{t("'Agreement': an agreement between a Customer and Emporium Concierge for the delivery of Justice as a Service.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Emporium Concierge': Emporium Concierge, a trading name of Optimus Consortium Limited.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Air Passenger Rights Regulation': any law, regulation, directive, international convention, or similar, whether issued on state, federal, EU, national, international, or regional level, and case law, that establishes rules on monetary compensation, damages, or refund to passengers in the event of overbooked, delayed, cancelled, or otherwise disrupted flights or luggage claims.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Assignment Form': the electronic document, whereby the Customer and Emporium Concierge agree that Emporium Concierge shall become the owner of the Claim, subject to the terms and conditions of the document, in order to collect and receive payments.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Authority Document': a document which authorises Emporium Concierge and/or one of Emporium Concierge's affiliates or partners to act on behalf of the Customer.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Claim': any claim against an airline for monetary compensation, damages, or refund pursuant to Air Passenger Rights Regulations or an airline's goodwill compensation.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Customer(s)': person(s) that has accepted these Terms. May also be referred to as 'Client' on some documents.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Eligibility Service': is Emporium Concierge's delivery of its state-of-the-art claim eligibility determination through software.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Flight Compensation': total amount of money paid by an airline in relation to a Claim as compensation, refund, damages, settlement, a gesture of goodwill, or otherwise, to the Customer or Emporium Concierge after the Customer has accepted these Terms.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Information Service': is Emporium Concierge's provision of flight information, airline information, airport information, other travel-related information, information about air passenger rights, and consumer protection laws.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Justice as a Service': is Emporium Concierge's pursuit of a Claim, including, if necessary, by Legal Action.")}</Typography></li>
                              <li><Typography mb={2}>{t("'Legal Action': filing a Claim with a court or a government body, such as a national enforcement body (NEB), or handing over a Claim to a contracted legal representative, such as an attorney or law firm.")}</Typography></li>
                              </ul>
                              <Typography sx={{fontSize: '21px', paddingBottom: '10px', fontWeight: '600', paddingTop: '12px',}} mb={2}>{t("2. Description of Justice as a Service")}</Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {" "}
                              <Typography mb={2}>{t("Emporium Concierge provides Justice as a Service to assert the Customer's Claim for Flight Compensation from the operating airline on the basis of EC 261 or any other Air Passenger Rights Regulation applicable to the Customer's particular air travel. We receive flight data and information from the Customer through our website, email, other electronic or software solutions supported by Emporium Concierge, or phone. To pursue the Claim successfully, we need the Customer's submitted Assignment Form or Authority Document, which they can send to us via the web form or using email, or postal service. We prepare a request for payment and send it to the operating airline without unreasonable delay and handle all further correspondence. If Flight Compensation is paid, we charge our Service Fee. If the operating airline fails to pay Flight Compensation within a reasonable period after being notified by us and provided the case may be asserted with adequate certainty, we may propose and initiate Legal Action to pursue the Claim. In the event that Legal Action is undertaken as advised and Flight Compensation is paid, we charge the Legal Action Fee in addition to the Service Fee. If a contracted legal representative is used for Legal Action, the Customer authorizes us to grant the legal representative access to all of the data communicated to us and to transfer information concerning the proceedings to us. We reserve the right to contact the Customer and actively pursue the Claim again in the event of changes affecting the Claim's prospects of success.")}</Typography>
                              <Typography  mb={2}>{t("If we or the contracted legal representative institutes legal proceedings to pursue a Claim, we will cover any costs incurred in the event the lawsuit is lost. In the event the lawsuit is won, or a settlement has been reached between the airline and us, we will cover any costs incurred that are not covered by the airline. The Customer acknowledges that it is the sole decision of Emporium Concierge to accept any settlement offer since the Customer has assigned the Claim to us. In case we act on behalf of the Customer pursuant to an Authority Document, the Customer authorizes us to accept or reject settlement offers based on our experience with the airline and the advice from external legal representatives. We may pursue the Claim in our own name with the assigned Claim, with or without the help of a legal representative. Where appropriate and/or legally necessary, we may reassign the Claim to the Customer and the Customer agrees to grant us an Authority Document to deliver Justice as a Service and collect and/or receive payments.")}</Typography>
                              <Typography sx={{fontSize: '21px', paddingBottom: '10px', fontWeight: '600', paddingTop: '12px',}} mb={2}>{t("3. Data and Information from the Customer")}</Typography>
                            </Grid>
                          </Grid>

                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {" "}
                              <Typography mb={2}>{t("Upon request by Emporium Concierge, the Customer or their fellow passengers will provide us with all data or information that is required for the execution of the Agreement. The Customer warrants that the data and information provided is correct, complete and true, and where applicable, given with the consent of the fellow passengers. The Customer agrees to fully indemnify Emporium Concierge in all respects for all third-party claims including, but not limited to, incorrect Customer communications, provision of incorrect data/information, and fraudulent conduct. In case of incorrect data/information and fraudulent conduct, we reserve the right to terminate the Agreement with immediate effect. If the Agreement is terminated in accordance with this paragraph, the Customer will not have any right to compensation of any kind.")}</Typography>
                              <Typography sx={{fontSize: '21px', paddingBottom: '10px', fontWeight: '600', paddingTop: '12px',}} mb={2}>{t("4. Right of Withdrawal")}</Typography>
                            </Grid>
                          </Grid>

                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {" "}
                              <Typography mb={2}>{t("If the Customer qualifies as a consumer in accordance with EU consumer regulations, they have a statutory right of withdrawal. The Customer can withdraw their acceptance of the Agreement within 14 days from the conclusion of the Agreement (e.g., letter, email) without the need to specify any reasons. To exercise their right to withdrawal, the withdrawal must be communicated within the 14-day period mentioned above, and it must clearly state their wish to withdraw from the Agreement. Due to the nature of the service provided to the Customer, they cannot withdraw from our Agreement if we have informed the Customer that the airline has accepted the Claim, as in such an event we have completed the service they requested.")}</Typography>
                              <Typography sx={{fontSize: '21px', paddingBottom: '10px', fontWeight: '600', paddingTop: '12px',}} mb={2}>{t("5. Final Provisions")}</Typography>
                            </Grid>
                          </Grid>

                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {" "}
                              <Typography  mb={2}>{t("Emporium Concierge is authorized to alter these Terms and any associated Price List and to set forth additional conditions at any time and without notice. However, changes with a negative effect on the Client will not apply to the Client unless they agree to new changes. The laws of Gibraltar apply to these Terms, the Assignment Form, and the Agreement between Emporium Concierge and the Customer, without regard to conflict of laws principles. Should any provision of these Terms be or become void, illegal, or unenforceable, this shall not affect the validity of the remaining provisions in any way whatsoever. Rights and obligations fully or partially related to any submitted Claim may be transferred without restrictions by Emporium Concierge to any entity within the corporate group of Emporium Concierge and by Emporium Concierge to third parties. The English version of these Terms shall prevail in case of inconsistency with any other language version.")}</Typography>
                              <Typography  mb={2}>{t("We use cookies 🍪 to provide you with the best browsing experience. By using Emporium Concierge, you agree to our cookie policy, which can be found on our website.")}</Typography>
                              <Typography  mb={2}>{t("If you have any questions or concerns about these Terms, please contact us at travel@emporiumconcierge.com. Thank you for choosing Emporium Concierge for your Justice as a Service needs.")}</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Button
                        sx={{marginTop: '25px'}}
                              variant="contained"
                              type="primary"
                              onClick={() => navigate(-1)}
                            >
                              {t("Previous")}
                            </Button>
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
import { TextField, Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";

const PersonalDetailsForm = ({
  errors,
  values,
  handleChange,
  setFieldValue,
}) => {
  const { t } = useTranslation();
  const theme = createTheme({
    // your theme configuration options
  });

  const myHandleChange = (event) => {
    const { name, value } = event.target;
    const key = name.split("_")[0];
    const index = Number(name.split("_")[1]);
    values.fullName[index][key] = value;
    setFieldValue("fullName", values.fullName);
  };

  const removeFullName = (index) => {
    values.fullName.splice(index, 1);
    setFieldValue("fullName", values.fullName);
  };
  const addFullName = () => {
    values.fullName.push({fullName: null, lastName: null});
    setFieldValue("fullName", values.fullName);
  };


  return (
    <Grid>
      <Box
        sx={{
          width: "100%",
          // maxWidth: 1000,
          // height: 300,
          backgroundColor: "#f3f6f9",
          borderColor: "primary.main",
          borderRadius: 2,
          // ml: 2,
          // mr: 2,
          mt: 6,
          pr: 5,
          pl: 5,
          pt: 6,
          [theme.breakpoints.up("md")]: {
            // ml: 30,
            // mr: 30,
          },
        }}
      >
        <Typography mb={2}>
          {t("I’ll need some passenger info to get things moving.")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            [theme.breakpoints.down("md")]: {
              display: "block",
            },
          }}
        >
          <Box
            className="col-lg-6 col-sx-12"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              [theme.breakpoints.up("md")]: {
                pr: 1,
              },
            }}
          >
            {" "}
            {values.fullName?.map((item, index) => {
              return (
                <TextField
                  fullWidth
                  error={!!errors.fullName?.[index]}
                  name={`firstName_${index}`}
                  label={t("firstName")}
                  value={item.firstName}
                  helperText={errors.fullName?.[index]?.firstName}
                  onChange={myHandleChange}
                />
              );
            })}
          </Box>
          <Box
            className="col-lg-6 col-sx-12"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              [theme.breakpoints.up("md")]: {
                pl: 1,
              },
              [theme.breakpoints.down("md")]: {
                pt: 3,
              },
            }}
          >
            {" "}
            {values.fullName?.map((item, index) => {
              return (
                <TextField
                  fullWidth
                  name={`lastName_${index}`}
                  label={t("lastName")}
                  value={item.lastName}
                  onChange={myHandleChange}
                  error={!!errors.fullName?.[index]}
                  helperText={errors.fullName?.[index]?.lastName}
                />
              );
            })}
          </Box>

          <Box   
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            {" "}
            {values.fullName?.map((item, index) => {
              return (
                <button style={{border: 0, background: "transparent", fontSize: "15px"}} onClick={() => {removeFullName(index)}}>❌</button>
              );
            })}
          </Box>
   
        </Box>
        <button  style={{border: "none", background: "transparent", color: "#1976D2", fontSize: "20px"}} onClick={() => {addFullName()}}>✚</button>
        <Box
          sx={{
            display: "flex",
            pt: 3,
            pb: 2,
            [theme.breakpoints.down("md")]: {
              display: "block",
            },
          }}
        >
          <Box
            className="col-lg-6 col-sx-12"
            sx={{
              [theme.breakpoints.up("md")]: {
                pr: 1,
              },
            }}
          >
            {" "}
            <TextField
              error={!!errors.email}
              name="email"
              label={t("Email")}
              value={values.email}
              helperText={errors.email}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Box
            className="col-lg-6 col-sx-12"
            sx={{
              [theme.breakpoints.up("md")]: {
                pl: 1,
              },
              [theme.breakpoints.down("md")]: {
                pt: 3,
                pb: 2,
              },
            }}
          >
            {" "}
            <TextField
              name="phoneNumber"
              label={t("PhoneNumber")}
              value={values.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              fullWidth
            />
          </Box>
        </Box>
      </Box>

      {/*   <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          name="addressLine"
          label={t('Address')}
          value={values.addressLine}
          onChange={handleChange}
          fullWidth
          />
      </Grid> */}
    </Grid>
  );
};

export default PersonalDetailsForm;

import React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useContactForm } from "./hooks/contactForm";
import { LoadingButton } from "@mui/lab";

export default function ContactForm() {
  const { handleChange, errors, handleSubmit, submitted, fields, loading } =
    useContactForm();

  return (
    <>
      <Box component="div" sx={{ pb: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {submitted && (
                <Box component="div" sx={{ color: "success.main" }}>
                  Thank you for your message!
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={fields.name}
                onChange={(e) => handleChange("name", e)}
                label="Name"
                color="secondary"
                fullWidth
                variant="standard"
                autoComplete="name"
                {...(errors["name"] && {
                  error: true,
                  helperText: errors["name"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={fields.email}
                onChange={(e) => handleChange("email", e)}
                label="Email"
                color="secondary"
                fullWidth
                variant="standard"
                autoComplete="email"
                {...(errors["email"] && {
                  error: true,
                  helperText: errors["email"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={fields.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e)}
                label="Phone"
                color="secondary"
                fullWidth
                variant="standard"
                autoComplete="tel"
                {...(errors["phoneNumber"] && {
                  error: true,
                  helperText: errors["phoneNumber"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={fields.message}
                onChange={(e) => handleChange("message", e)}
                label="Message"
                color="secondary"
                fullWidth
                variant="standard"
                multiline
                rows={5}
                autoComplete="tel"
                {...(errors["message"] && {
                  error: true,
                  helperText: errors["message"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                loading={loading}
                type="submit"
                variant="outlined"
                color="secondary"
              >
                {/* Submit or if submitted, then tick icon from mui */}
                {submitted ? "✓" : "Submit"}
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

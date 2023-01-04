import React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useContactForm } from "./hooks/contactForm";

export default function ContactForm() {
  const { handleChange, errors, handleSubmit } = useContactForm();

  return (
    <>
      <Box component="div" sx={{ pb: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange("name", e)}
                label="Name"
                color="secondary"
                fullWidth
                variant="standard"
                focused
                autoComplete="name"
                {...(errors["name"] && {
                  error: true,
                  helperText: errors["name"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange("email", e)}
                label="Email"
                color="secondary"
                fullWidth
                variant="standard"
                focused
                autoComplete="email"
                {...(errors["email"] && {
                  error: true,
                  helperText: errors["email"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange("phoneNumber", e)}
                label="Phone"
                color="secondary"
                fullWidth
                variant="standard"
                focused
                autoComplete="tel"
                {...(errors["phoneNumber"] && {
                  error: true,
                  helperText: errors["phoneNumber"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange("message", e)}
                label="Message"
                color="secondary"
                fullWidth
                variant="standard"
                focused
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
              <Button type="submit" variant="outlined" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import { useContactForm } from "./hooks/contactForm";

export default function ContactForm() {
  const { fields, handleChange, validateForm, errors, handleSubmit } =
    useContactForm();

  return (
    <>
      <Box component="div" sx={{ pb: 2 }}>
        <form onSubmit={handleSubmit}>
          {JSON.stringify({ ...fields })}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                onChange={(e) => handleChange("name", e)}
                label="Name"
                color="secondary"
                fullWidth
                autoComplete="name"
                {...(errors["name"] && {
                  error: true,
                  helperText: errors["name"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                onChange={(e) => handleChange("email", e)}
                label="Email"
                color="secondary"
                fullWidth
                autoComplete="email"
                {...(errors["email"] && {
                  error: true,
                  helperText: errors["email"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phoneNumber"
                onChange={(e) => handleChange("phoneNumber", e)}
                label="Phone"
                color="secondary"
                fullWidth
                autoComplete="tel"
                {...(errors["phoneNumber"] && {
                  error: true,
                  helperText: errors["phoneNumber"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                onChange={(e) => handleChange("message", e)}
                label="Message"
                color="secondary"
                fullWidth
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
            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
